const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const out=process.argv[2]||'.next/server/app',base='https://www.bnbacceleratorreviews.co';
const xml=fs.readFileSync(path.join(out,'sitemap.xml.body'),'utf8');
const urls=[...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(x=>x[1]);assert(urls.length);assert.equal(new Set(urls).size,urls.length);
for(const u of urls){const url=new URL(u);assert.equal(url.origin,base);const slug=url.pathname==='/'?'index':url.pathname.slice(1);const p=path.join(out,slug+'.html');assert(fs.existsSync(p),'Missing '+u);const s=fs.readFileSync(p,'utf8');const canon=[...s.matchAll(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/g)].map(x=>x[1]);assert.deepEqual(canon,[u],'Canonical '+u);assert(!/<meta\b(?=[^>]*name="robots")(?=[^>]*content="[^"]*noindex)/i.test(s),'Noindex '+u);assert.equal((s.match(/<h1\b/g)||[]).length,1,'H1 '+u);}
const slug='str-acquisition-service-vs-buyers-agent-vs-property-manager';const html=fs.readFileSync(path.join(out,'guides',slug+'.html'),'utf8');assert(html.includes('November 6, 2026'));assert(html.includes('2026-11-06'));for(const m of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs))JSON.parse(m[1]);
assert(fs.existsSync('public/worksheets/str-service-responsibility-comparison.csv'));
assert(urls.includes(base+'/guides/'+slug));
console.log('PASS: '+urls.length+' sitemap routes have canonical, indexability, H1; comparison guide date/schema/worksheet verified.');
