import { Message, MessageEmbed } from "discord.js";
import { i18n } from "../utils/i18n";
import { bot } from "../index";

export default {
  name: "help",
  aliases: ["h"],
  description: i18n.__("help.description"),
  execute(message: Message) {
    let commands = bot.commands;

    let helpEmbed = new MessageEmbed()
      .setTitle(i18n.__mf("help.embedTitle", { botname: message.client.user!.username }))
      .setDescription(i18n.__("help.embedDescription"))
      .setImage('https://i.imgur.com/RHjewEF.png')
      .setColor("#ad81ff");

    commands.forEach((cmd) => {
      helpEmbed.addField(
        `**${bot.prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
        `${cmd.description}`,
        true
      );
    });

    helpEmbed.setTimestamp();

    return message.reply({ embeds: [helpEmbed] }).catch(console.error);
  }
};
