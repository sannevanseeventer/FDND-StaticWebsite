import { c as create_ssr_component, a as add_attribute, e as escape, b as each, v as validate_component } from "../../../chunks/ssr.js";
import { F as Footer } from "../../../chunks/Footer.js";
const Kennisbank_svelte_svelte_type_style_lang = "";
const css = {
  code: 'h2.svelte-1w943w0.svelte-1w943w0{padding-top:2rem;color:var(--spat)}section.svelte-1w943w0.svelte-1w943w0{margin-top:5rem;height:100%;padding-bottom:5rem;background:var(--lg-bg)}.mobile-blog-header.svelte-1w943w0.svelte-1w943w0{display:none}.intro-text.svelte-1w943w0.svelte-1w943w0{display:none}a.svelte-1w943w0.svelte-1w943w0{text-decoration:none}.blog-view-container.svelte-1w943w0.svelte-1w943w0{display:grid;padding:0.7rem 2.5rem;grid-template-columns:0.9fr 0.9fr 1fr;grid-template-rows:0.1fr 1fr;gap:2rem;row-gap:1rem;grid-template-areas:"latest latest bloglist"\n      "blog2 blog3 bloglist"}.latest.svelte-1w943w0.svelte-1w943w0{grid-area:latest}.blog2.svelte-1w943w0.svelte-1w943w0{background-color:#ffffff;height:25rem;box-shadow:rgba(0, 0, 0, 0.14) 0px 3px 8px;border-radius:0.5rem;cursor:pointer;grid-area:blog2}.blog3.svelte-1w943w0.svelte-1w943w0{height:25rem;background-color:#ffffff;box-shadow:rgba(0, 0, 0, 0.14) 0px 3px 8px;border-radius:0.5rem;cursor:pointer;grid-area:blog3}.bloglist.svelte-1w943w0.svelte-1w943w0{grid-area:bloglist}.blog.svelte-1w943w0.svelte-1w943w0{width:100%;display:flex;flex-direction:column;height:85vh;gap:1rem}.filter-container.svelte-1w943w0.svelte-1w943w0{gap:1rem;padding:0rem 2.7rem 0rem 2.5rem}.hygraph-html.svelte-1w943w0.svelte-1w943w0{max-width:29rem;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:5;line-clamp:5;-webkit-box-orient:vertical}.hygraph-html2.svelte-1w943w0.svelte-1w943w0{max-width:25rem;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:4;line-clamp:4;-webkit-box-orient:vertical;padding-left:1.5rem}.hygraph-html3.svelte-1w943w0.svelte-1w943w0{max-width:25rem;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:4;line-clamp:4;-webkit-box-orient:vertical;padding-left:1.5rem}.content-field2.svelte-1w943w0.svelte-1w943w0,.content-field3.svelte-1w943w0.svelte-1w943w0{display:flex;justify-content:space-between;padding-left:1.5rem;padding-top:1rem;padding-right:1.5rem;padding-bottom:1rem;color:var(--darkblue)}.filter-row.svelte-1w943w0.svelte-1w943w0{display:flex;align-items:center;width:100%;justify-content:space-between}.filter-item-list.svelte-1w943w0.svelte-1w943w0{list-style:none;padding:0;display:flex;justify-content:space-between;align-items:center;margin:2rem 0rem 1rem 0rem;color:#2b3f5a}.filter-item-list.svelte-1w943w0 li.svelte-1w943w0{margin-right:1.5rem;padding:0.2rem 0.6rem;cursor:pointer;font-size:0.8rem;-webkit-user-select:none;-ms-user-select:none;user-select:none}.active.svelte-1w943w0.svelte-1w943w0{background-color:var(--green);color:#ffffff;border-radius:0.5rem}.searchbar-container.svelte-1w943w0.svelte-1w943w0{margin:1rem 0rem 1rem 0rem}.searchbar.svelte-1w943w0.svelte-1w943w0{width:30.2rem;padding:0.5rem 0.6rem;border-radius:0.5rem;border:none;box-shadow:rgba(0, 0, 0, 0.14) 0px 3px 8px}.searchbar.svelte-1w943w0.svelte-1w943w0::placeholder{color:#b7b7b7}.blog-list-container.svelte-1w943w0.svelte-1w943w0{height:80vh;overflow-y:scroll}.blog-list-container.svelte-1w943w0.svelte-1w943w0::-webkit-scrollbar{display:none}.blog-list.svelte-1w943w0.svelte-1w943w0{list-style:none;padding:0;height:100vh;width:100%}.blog-list.svelte-1w943w0 li.svelte-1w943w0{background-color:#ffffff;box-shadow:rgba(0, 0, 0, 0.14) 0px 3px 8px;border-radius:0.5rem;cursor:pointer;display:flex;margin-bottom:1rem;height:8rem;width:99%}.blog-info-row.svelte-1w943w0.svelte-1w943w0{display:flex;justify-content:space-between;align-items:center;gap:3rem}.author.svelte-1w943w0.svelte-1w943w0{position:absolute;font-size:0.6rem !important;padding-top:0.2rem;right:1.5rem}.author2.svelte-1w943w0.svelte-1w943w0,.author3.svelte-1w943w0.svelte-1w943w0{font-size:0.7rem !important;padding-top:0.2rem}.blog-list.svelte-1w943w0 img.svelte-1w943w0{width:10rem;height:auto;object-fit:cover;padding:0;margin:0;border-radius:0.5rem 0rem 0rem 0.5rem}.blog-list.svelte-1w943w0 .blog-text.svelte-1w943w0{padding:1rem 1rem;position:relative}.blog-list.svelte-1w943w0 span.svelte-1w943w0{color:#2b3f5a;font-size:0.8rem;margin-bottom:0.5rem}.blog-list.svelte-1w943w0 h3.svelte-1w943w0{color:var(--spat);margin-bottom:0.5rem}.main-post.svelte-1w943w0.svelte-1w943w0{width:100%;height:17rem;display:flex;box-shadow:rgba(0, 0, 0, 0.14) 0px 3px 8px;border-radius:0.5rem;background-color:#ffffff;position:relative;overflow:hidden}.main-post.svelte-1w943w0 img.svelte-1w943w0{width:20rem;object-fit:cover;border-radius:0.5rem 0rem 0rem 0.5rem;margin:0}.main-post2.svelte-1w943w0 img.svelte-1w943w0,.main-post3.svelte-1w943w0 img.svelte-1w943w0{margin:0}.main-post.svelte-1w943w0 .content-field.svelte-1w943w0{max-width:35rem;padding:1.5rem}.main-post.svelte-1w943w0 span.svelte-1w943w0{color:var(--darkblue);font-size:0.9rem}.main-post.svelte-1w943w0 h3.svelte-1w943w0{color:var(--spat);margin-bottom:0.5rem;margin-top:1rem}.main-post2.svelte-1w943w0 h3.svelte-1w943w0,.main-post3.svelte-1w943w0 h3.svelte-1w943w0{padding-left:1.5rem;color:var(--spat);margin-bottom:0.5rem;font-size:1rem}.main-post2.svelte-1w943w0 img.svelte-1w943w0,.main-post3.svelte-1w943w0 img.svelte-1w943w0{width:100%;height:10rem;object-fit:cover;border-radius:0.5rem 0.5rem 0rem 0rem}.main-post2.svelte-1w943w0.svelte-1w943w0,.main-post3.svelte-1w943w0.svelte-1w943w0{overflow:hidden}.read-more-container.svelte-1w943w0.svelte-1w943w0{margin-top:1.8rem}.read-more-container2.svelte-1w943w0.svelte-1w943w0,.read-more-container3.svelte-1w943w0.svelte-1w943w0{height:5rem;margin-top:1.5rem;margin-left:1.5rem}.read-more-link.svelte-1w943w0.svelte-1w943w0{width:6.5rem;bottom:1rem;cursor:pointer;font-size:0.9rem;color:var(--green);border-radius:0.5rem}.read-more-link2.svelte-1w943w0.svelte-1w943w0,.read-more-link3.svelte-1w943w0.svelte-1w943w0{color:var(--green);border-radius:0.5rem;width:6.5rem;font-size:0.9rem}.read-more-small.svelte-1w943w0 i.svelte-1w943w0{position:absolute;right:1.5rem;bottom:1rem;color:var(--green);transition:0.2s}.read-more-small.svelte-1w943w0:hover i.svelte-1w943w0{transform:translateX(0.5rem)}#map.svelte-1w943w0.svelte-1w943w0{height:85vh;pointer-events:none}@media only screen and (max-width: 1100px){.blog.svelte-1w943w0.svelte-1w943w0{width:100%}.blog-view-container.svelte-1w943w0.svelte-1w943w0{display:block}.blog2.svelte-1w943w0.svelte-1w943w0,.blog3.svelte-1w943w0.svelte-1w943w0{display:none}.main-post.svelte-1w943w0.svelte-1w943w0{display:none}.filter-row.svelte-1w943w0.svelte-1w943w0{display:none}.filter-item-list.svelte-1w943w0.svelte-1w943w0{display:flex;flex-wrap:wrap;row-gap:0.5rem}.mobile-blog-header.svelte-1w943w0.svelte-1w943w0{display:flex;flex-wrap:wrap;justify-content:space-between;margin-bottom:1rem}.blog-list.svelte-1w943w0 li.svelte-1w943w0{display:flex;flex-direction:column;height:23rem}.blog-list.svelte-1w943w0 img.svelte-1w943w0{width:100%;height:8rem;border-radius:0.5rem 0.5rem 0rem 0rem}.intro-text.svelte-1w943w0.svelte-1w943w0{display:block}.mobile-blog-header.svelte-1w943w0 li.svelte-1w943w0{display:flex;flex-wrap:wrap;justify-content:space-between;margin-right:0.1rem;font-size:0.7rem}}',
  map: null
};
const Kennisbank = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let lastPost1 = data.kennisbanks[data.kennisbanks.length - 1];
  let lastPost2 = data.kennisbanks[data.kennisbanks.length - 2];
  let lastPost3 = data.kennisbanks[data.kennisbanks.length - 3];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<section class="svelte-1w943w0"><div class="filter-container svelte-1w943w0" data-svelte-h="svelte-15samuk"><h2 id="kennisbank" class="svelte-1w943w0">Kennisbank</h2> <div class="mobile-blog-header svelte-1w943w0"><ul class="filter-item-list svelte-1w943w0" id="filterList-mobile"><li class="active svelte-1w943w0">Alles</li> <li class="svelte-1w943w0">Klimaatadaptatie</li> <li class="svelte-1w943w0">Waterkwaliteit</li> <li class="svelte-1w943w0">B-RAIN</li></ul> <input class="searchbar svelte-1w943w0" type="search" id="search" name="search" placeholder="Zoek een project"></div> <div class="filter-row svelte-1w943w0"><div class="filter-list-container"><ul class="filter-item-list svelte-1w943w0" id="filterList"><li class="active svelte-1w943w0">Alles</li> <li class="svelte-1w943w0">Klimaatadaptatie</li> <li class="svelte-1w943w0">Waterkwaliteit</li> <li class="svelte-1w943w0">B-RAIN</li></ul></div> <div class="searchbar-container svelte-1w943w0"><input class="searchbar svelte-1w943w0" type="search" id="search" name="search" placeholder="Zoek een post"></div></div></div> <div class="blog-view-container svelte-1w943w0"><div class="latest svelte-1w943w0"><article class="main-post svelte-1w943w0">${data.kennisbanks.length > 0 ? `<img${add_attribute("src", lastPost1.image.url, 0)} alt="" class="svelte-1w943w0"> <div class="content-field svelte-1w943w0"><span class="category svelte-1w943w0">${escape(lastPost1.categorie)}</span> <span class="author svelte-1w943w0">Door ${escape(lastPost1.author)} op ${escape(lastPost1.date)}</span> <h3 class="svelte-1w943w0">${escape(lastPost1.title)}</h3> <div class="hygraph-html svelte-1w943w0"><!-- HTML_TAG_START -->${lastPost1.content.html}<!-- HTML_TAG_END --></div> <div class="read-more-container svelte-1w943w0"><a class="read-more-link svelte-1w943w0" href="${"/post/" + escape(lastPost1.slug, true)}">Verder lezen</a></div></div>` : ``}</article></div> <div class="blog2 svelte-1w943w0"><article class="main-post2 svelte-1w943w0">${data.kennisbanks.length > 0 ? `<img${add_attribute("src", lastPost2.image.url, 0)} alt="" class="svelte-1w943w0"> <div class="content-field2 svelte-1w943w0"><span class="category2">${escape(lastPost2.categorie)}</span> <span class="author2 svelte-1w943w0">Door ${escape(lastPost2.author)} op ${escape(lastPost2.date)}</span></div> <h3 class="svelte-1w943w0">${escape(lastPost2.title)}</h3> <div class="hygraph-html2 svelte-1w943w0"><!-- HTML_TAG_START -->${lastPost2.content.html}<!-- HTML_TAG_END --></div> <div class="read-more-container2 svelte-1w943w0"><a class="read-more-link2 svelte-1w943w0" href="${"/post/" + escape(lastPost2.slug, true)}">Verder lezen</a></div>` : ``}</article></div> <div class="blog3 svelte-1w943w0"><article class="main-post3 svelte-1w943w0">${data.kennisbanks.length > 0 ? `<img${add_attribute("src", lastPost3.image.url, 0)} alt="" class="svelte-1w943w0"> <div class="content-field3 svelte-1w943w0"><span class="category3">${escape(lastPost3.categorie)}</span> <span class="author3 svelte-1w943w0">Door ${escape(lastPost3.author)} op ${escape(lastPost3.date)}</span></div> <h3 class="svelte-1w943w0">${escape(lastPost3.title)}</h3> <div class="hygraph-html3 svelte-1w943w0"><!-- HTML_TAG_START -->${lastPost3.content.html}<!-- HTML_TAG_END --></div> <div class="read-more-container3 svelte-1w943w0"><a class="read-more-link3 svelte-1w943w0" href="${"/post/" + escape(lastPost3.slug, true)}">Verder lezen</a></div>` : ``}</article></div> <div class="bloglist svelte-1w943w0"><article class="blog svelte-1w943w0"><div class="set-max-height"><div class="blog-list-container svelte-1w943w0"><ul class="blog-list svelte-1w943w0">${each(data.kennisbanks, (post) => {
    return `<a href="${"/post/" + escape(post.slug, true)}" class="svelte-1w943w0"><li${add_attribute("id", post.slug, 0)} class="svelte-1w943w0"><img${add_attribute("src", post.image.url, 0)} alt="" class="svelte-1w943w0"> <div class="blog-text svelte-1w943w0"><div class="blog-info-row svelte-1w943w0"><span class="category svelte-1w943w0">${escape(post.categorie)}</span> <span class="author svelte-1w943w0">Door ${escape(post.author)} op ${escape(post.date)}</span></div> <h3 class="svelte-1w943w0">${escape(post.title)}</h3> <p class="intro-text svelte-1w943w0" data-svelte-h="svelte-1qobpb6">Het is tijd om Nederlanders bewust te maken van de
                        hoeveelheid regenwater op- en rondom het huis. Onze
                        oplossing is het grootschalig inzetten
                        vanmicro-maatregelen.</p> <a class="read-more-small svelte-1w943w0" href="${"/post/" + escape(post.slug, true)}"><i class="fa fa-arrow-right svelte-1w943w0" aria-hidden="true"></i></a> </div></li> </a>`;
  })}</ul></div></div></article></div></div> </section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Kennisbank, "Kennisbank").$$render($$result, { data }, {}, {})} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};