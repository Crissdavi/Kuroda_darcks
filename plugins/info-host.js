let handler = async (m, { conn, command, usedPrefix }) => {
let cafirexostxt = `🚩 C A F I R E X O S 

🔵 \`\`\`Información del Host\`\`\`

💻 *Página*
https://www.cafirexos.com

✨ *Dashboard*
https://dashboard.cafirexos.com

🍁 *Aréa de clientes*
https://clientes.cafirexos.com

⚙️ *Panel*
https://panel.cafirexos.com

📢 *Canal de WhatsApp*
https://whatsapp.com/channel/0029VaFVSkRCMY0KFmCMDX2q

💥 *Grupo de WhatsApp*
https://chat.whatsapp.com/FBtyc8Q5w2iJXVl5zGJdFJ

📧 *Correo*
contacto@cafirexos.com

🧑‍💻 *Contacto (Diego Flores)*
https://wa.me/50497150165`

let txt = `🚩 *F L A R E X - C L O U D* 

*¿Quieres un Host de calidad y con bajos precios?*
Pues te presento a *FlarexCloud*, un hosting de calidad con servidores dedicados y precios por debajo de 1USD, estos servidores están destinados a ofrecerte un Uptime 24/7 para que puedas alojar tus proyectos y qué estos funcionen de manera eficaz.

🟢 \`\`\`Información del Host\`\`\`

💫 *Página:* 
• https://www.flarex.cloud

💙 *Game Panel:* 
• https://gamepanel.flarex.cloud

☁️ *Discord:*
• https://discord.flarex.cloud

🤍 *Grupo:*
• https://whatsapp.flarex.cloud

> *Únete a está comunidad y disfruta de un servicio de calidad :D*` 

if (command == 'cafirexos') {
await conn.sendFile(m.chat, 'https://grxcwmcwbxwj.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grxcwmcwbxwj/b/cafirexos/o/logos%2Flogo.png', 'fantasy.jpg', cafirexostxt.trim(), fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `🔵 C A F I R E X O S 🔵`,
body: `✅ Hosting de Calidad`,
mediaType: 1,
sourceUrl: 'https://www.cafirexos.com',
thumbnailUrl: 'https://grxcwmcwbxwj.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grxcwmcwbxwj/b/cafirexos/o/logos%2Flogo_2.png'
}}
}, { mentions: m.sender })
}

if (command == 'flarex' || command == 'flarexcloud') {
 await conn.sendMessage(m.chat, { text: txt,
contextInfo:{
forwardingScore: 9999999,
isForwarded: false, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: `🔵 *F L A R E X - C L O U D* 🔵`,
body: `✅ Hosting de Calidad`,
"previewType": "PHOTO",
thumbnailUrl: 'https://qu.ax/EQTd.jpg', 
sourceUrl: 'https://www.flarex.cloud'}}},
{ quoted: fkontak})
}}

let txt = `⚜️ *O L Y M P U S - H O S T*

*¿Muy lento tu Samsung J1 y necesitas tener activo tu bot 24/7?*

> *Te tenemos la mejor opción para que tengas activo tu bot 24/7, a precios muy accesibles. Es muy barato y todos pueden comprar.*

*PRECIOS*

• 1GB, 100CPU = 1 dólar

• 2GB, 120CPU = 2,50 dólares

• 3GB, 140CPU = 3,50 dólares

• 4GB, 175CPU = 4,50 dólares

• 5GB, 200CPU = 5,50 dólares

🔵 ```Información del Server```

💻 *Página:*
https://kingsvhost.asifofc.xyz


💙 *Canal de WhatsApp:*
https://whatsapp.com/channel/0029ValCkNT2ER6gHWFRQ71J

📱 *Contacto*
wa.me/593979133620
> *Únete a está comunidad y disfruta de un servicio de calidad :D*` 

if (command == 'olympus') {
await conn.sendFile(m.chat, 'https://telegra.ph/file/318faccdf202ee6aab37c.jpg/logos%2Flogo.jpg', 'fantasy.jpg', olympustxt.trim(), fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `🔵 O L Y M P U S - H O S T 🔵`,
body: `✅ Hosting de Calidad`,
mediaType: 1,
sourceUrl: 'https://www.cafirexos.com',
thumbnailUrl:
handler.help = ['cafirexos', 'flarexcloud', 'olympus']
handler.tags = ['main']
handler.command = ['cafirexos', 'flarex', 'flarexcloud', 'olympus']
export default handler