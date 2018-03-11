class InitialStateConfig
{
	static setInitialStateType(_type)
	{
		this.type = _type.toLowerCase();
	}
	static getInitialStateType()
	{
		return this.type;
	}

	static addInitialAliveCell(_cell)
	{
		if(!this.initialAliveCells)
			this.initialAliveCells = [];

		this.initialAliveCells.push(new Cell(_cell.getNumber("x"), _cell.getNumber("y"), Config.getCellSize(), 1));
	}
	static addInitialAliveCell(_x, _y)
	{
		if(!this.initialAliveCells)
			this.initialAliveCells = [];

		this.initialAliveCells.push(new Cell(_x, _y, Config.getCellSize(), 1));
	}
	static getInitialAliveCell(i)
	{
		return this.initialAliveCells[i];
	}
	static getInitialAliveCellsCount()
	{
		return this.initialAliveCells.length;
	}

}