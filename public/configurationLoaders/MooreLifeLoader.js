class MooreLifeLoader {
    static loadMooreLife(ruleXml) {
    	// try
    	// {
	    	let defaultColors = ruleXml.getChild("defaultColors");
    	    let defaultDeadColors = defaultColors.getChild("dead");
    	    let ifDeadBecomesAlive = defaultDeadColors.getChild("colorIfAlive");
    	    let ifDeadBecomesDead = defaultDeadColors.getChild("colorIfDead");

	    	let defaultAliveColors = defaultColors.getChild("alive");
    	    let ifAliveBecomesAlive = defaultAliveColors.getChild("colorIfAlive");
    	    let ifAliveBecomesDead = defaultAliveColors.getChild("colorIfDead");

        	//this.xmlToColor(ifDeadBecomesAlive, RuleConfig.setDefaultDeadToAliveColor);
        	RuleConfig.setDefaultDeadToAliveColor(ifDeadBecomesAlive.getNumber("r", 255),
        		ifDeadBecomesAlive.getNumber("g", 255),
        		ifDeadBecomesAlive.getNumber("b", 255));
        	console.log("Moore life loader default dead to alive color: ", RuleConfig.getDefaultDeadToAliveColor());

			RuleConfig.setDefaultDeadToDeadColor(ifDeadBecomesDead.getNumber("r", 0),
        		ifDeadBecomesDead.getNumber("g", 0),
        		ifDeadBecomesDead.getNumber("b", 0));
        	console.log("Moore life loader default dead to dead color: ", RuleConfig.getDefaultDeadToDeadColor());

        	RuleConfig.setDefaultAliveToAliveColor(ifAliveBecomesAlive.getNumber("r", 255),
        		ifAliveBecomesAlive.getNumber("g", 255),
        		ifAliveBecomesAlive.getNumber("b", 255));
        	console.log("Moore life loader default alive to alive color: ", RuleConfig.getDefaultAliveToAliveColor());

     		RuleConfig.setDefaultAliveToDeadColor(ifAliveBecomesDead.getNumber("r", 0),
        		ifAliveBecomesDead.getNumber("g", 0),
        		ifAliveBecomesDead.getNumber("b", 0));
        	console.log("Moore life loader default alive to dead color: ", RuleConfig.getDefaultAliveToDeadColor());


			RuleConfig.setRuleType(ruleXml.getChild("ruleType").getContent());
			console.log("Moore life rule type:", RuleConfig.getRuleType());   

			switch(RuleConfig.getRuleType())
			{
				case "count":
					let ruleEntriesCount = pow(2 * Config.getRadius() + 1, 2);
					let ruleEntries = ruleXml.getChild("rules").getChildren("entry");
					if(ruleEntriesCount !== ruleEntries.length)
						throw "Incorrect rule entries count. Expected " + ruleEntriesCount + " but was " + ruleEntries.length;

					console.log("rule entries count:", ruleEntries.length);

					for(let i = 0; i < ruleEntries.length; i++)
					{
						RuleConfig.addRuleEntry(ruleEntries[i]);
						console.log(i + ". Entry:", RuleConfig.getRuleEntry(i));
					}
				break;

				default:
					throw "No rule type: " + RuleConfig.getRuleType();
				break;
			}
    }

    static xmlToColor(colorXml, setter)
    {
    	//console.log(colorXml);
    	setter(colorXml.getNumber("r", 255), colorXml.getNumber("g", 255), colorXml.getNumber("b", 255));
    }
}