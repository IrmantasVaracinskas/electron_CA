class RuleConfig {
    static setDefaultDeadToAliveColor(_r, _g, _b) {
        this.defaultDeadToAliveColor = color(_r, _g, _b);
    }
    static getDefaultDeadToAliveColor() {
        return this.defaultDeadToAliveColor;
    }

    static setDefaultDeadToDeadColor(_r, _g, _b) {
        this.defaultDeadToDeadColor = color(_r, _g, _b);
    }
    static getDefaultDeadToDeadColor() {
        return this.defaultDeadToDeadColor;
    }

    static setDefaultAliveToAliveColor(_r, _g, _b) {
        this.defaultAliveToAliveColor = color(_r, _g, _b);
    }
    static getDefaultAliveToAliveColor() {
        return this.defaultAliveToAliveColor;
    }

    static setDefaultAliveToDeadColor(_r, _g, _b) {
        this.defaultAliveToDeadColor = color(_r, _g, _b);
    }
    static getDefaultAliveToDeadColor() {
        return this.defaultAliveToDeadColor;
    }


    static setRuleType(_type) {
        this.ruleType = _type.toLowerCase();
    }
    static getRuleType() {
        return this.ruleType;
    }

    static addRuleEntry(_entry) {
        if (!this.ruleEntries) {
            this.ruleEntries = [];
        }
        let entry = { valueIfAlive: _entry.getNumber("valueIfAlive", 0), valueIfDead: _entry.getNumber("valueIfDead", 0) };

        let temp = this.stringToColor(_entry.getString("colorDeadToDead"));
        if (temp)
            entry.colorDeadToDead = temp;
        else
            entry.colorDeadToDead = this.defaultDeadToDeadColor;

        let temp2 = this.stringToColor(_entry.getString("colorDeadToAlive"));
        if (temp2)
            entry.colorDeadToAlive = temp2;
        else
            entry.colorDeadToAlive = this.defaultDeadToAliveColor;

        let temp3 = this.stringToColor(_entry.getString("colorAliveToDead"));
        if (temp)
            entry.colorAliveToDead = temp3;
        else
            entry.colorAliveToDead = this.defaultAliveToDeadColor;

        let temp4 = this.stringToColor(_entry.getString("colorAliveToAlive"));
        if (temp)
            entry.colorAliveToAlive = temp4;
        else
            entry.colorAliveToAlive = this.defaultAliveToAliveColor;

        this.ruleEntries[Math.round(_entry.getNumber("key"))] = entry;
    }

    static getRuleEntry(i) {
        return this.ruleEntries[i];
    }






    static stringToColor(_colorString) {
        if (_colorString) {
            let rgb = _colorString.split(" ");
            return color(Number(rgb[0]), Number(rgb[1]), Number(rgb[2]));
        }
    }
}