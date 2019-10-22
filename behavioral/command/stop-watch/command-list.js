// = таким образом можно добавлять несколько обработчиков и каждому прописывать свою логику в отдельном модуле
class CommandList {
  constructor(...commands) {
    this.commands = commands;
  }

  add(command) {
    this.commands.push(command);
  }

  execute() {
    for (let command of this.commands) {
      command.execute();
    }
  }
}

const commandList = new CommandList();
commandList.add(startCommnd, logCommand, printCommand);

Button.setCommand(commandList);
