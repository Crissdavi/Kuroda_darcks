import fs from 'fs';
const handler = (m) => m;
handler.all = async function(m) {

const chat = global.db.data.chats[m.chat];
if (chat.isBaneed) return
if (/^bot$/i.test(m.text)) {
conn.reply(m.chat, `🚩 ¡Hola! Soy Goku, en que puedo ayudarte hoy?\n\n✰ Usa *!menu* para ver mis comandos.`, m, rcanal, )
}
/*if (/^que|q$/i.test(m.text)) {
conn.reply(m.chat, `*sorpresa* 👌🤌`, m, rcanal, )
}*/
if (/^sexo$/i.test(m.text)) {
conn.reply(m.chat, `*pervertido* 🫣`, m, rcanal, )
}
/*if (/^a$/i.test(m.text)) {
conn.reply(m.chat, `*rroz con pollo* 😄👌`, m, rcanal, )
}*/
if (/^bug$/i.test(m.text)) {
conn.reply(m.chat, `*tu mamá we* 😹`, m, rcanal, )
}
if (/^pene$/i.test(m.text)) {
conn.reply(m.chat, `*comes* 😹`, m, rcanal, )
}
return !0;
};
export default handler;