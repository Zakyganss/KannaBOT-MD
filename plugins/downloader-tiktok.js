import { tiktokdl } from '@bochilteam/scraper'

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
    const { author: { nickname }, video, description } = await tiktokdl(args[0])
    const url = video.no_watermark || video.no_watermark2 || video.no_watermark_raw
    if (!url) throw 'Can\'t download video!'
   let caption = `                   *「 T I K T O K 」*
                 ████████▀▀▀████
                 ████████────▀██
                 ████████──█▄──█
                 ███▀▀▀██──█████
                 █▀──▄▄██──█████
                 █──█████──█████
                 █▄──▀▀▀──▄█████
                 ███▄▄▄▄▄███████
──────────────────────────
*📛 Title:* ${data.title}
*🖼️ Quality:* ${data.medias[1].quality}
*📊 Size:* ${data.medias[1].forrmattedSize}`
    await conn.sendHydrated(m.chat, caption, global.wm, data.medias[1].url, `${args[0]}`, 'Done😊', null, null, [[null, null],[null,null],[null,null]], m) 
    })
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tik(tok)?)$/i

export default handler
