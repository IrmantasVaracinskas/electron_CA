class InitialStateLoader
{
	static loadInitialState(rootXml)
	{
		let initialStateXml = rootXml.getChild("initialState");

		InitialStateConfig.setInitialStateType(initialStateXml.getChild("initialStateType").getContent());
        console.log("Initial state type:", InitialStateConfig.getInitialStateType());

        switch(InitialStateConfig.getInitialStateType())
        {
        	case "given":
        		let aliveCells = initialStateXml.getChild("aliveCells").getChildren("entry");
        		for(let i = 0; i < aliveCells.length; i++)
        			InitialStateConfig.addInitialAliveCell(aliveCells[i]);
        		for(let i = 0; i < aliveCells.length; i++)
        			console.log(InitialStateConfig.getInitialAliveCell(i));
        	break;
        	case "random":
        		let probability = initialStateXml.getChild("initialAliveProbability").getContent();
        		let w = width / Config.getCellSize();
        		let h = height / Config.getCellSize();
        		for(let i = 0; i < w * h; i++)
        		{
        			let temp = random();
        			if(temp <= probability)
        				InitialStateConfig.addInitialAliveCell(i % w, floor(i / h));
        		}
        		for(let i = 0; i < InitialStateConfig.getInitialAliveCellsCount(); i++)
        			console.log(InitialStateConfig.getInitialAliveCell(i));
        	break;
        	default:
        		throw "No such initial state type: " + InitialStateConfig.getInitialStateType();
        	break;
        }
	}
}