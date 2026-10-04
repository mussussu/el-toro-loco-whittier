import { ButtonLink } from "@/components/button-link";
import { PhoneIcon } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { business } from "@/data/business";
import { menuCategories, menuItems } from "@/data/menu";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Menu",
  "Explore the El Toro Loco menu and current prices for carnitas, menudo, barbacoa, birria de chivo, tamales, traditional plates, and handmade tortillas in Whittier.",
  "/menu",
);

function formatPrice(price: number) {
  return `$${price.toFixed(2)}`;
}

export default function MenuPage() {
  const partyOfferings = menuItems.filter((item) => item.category === "Para Fiestas");

  return (
    <>
      <PageHero
        eyebrow="Menú"
        title="Traditional Mexican Favorites"
        description="From carnitas and birria de chivo to tamales and handmade tortillas, find your next favorite at El Toro Loco."
        image="/images/menu-board.png"
        imageAlt="El Toro Loco restaurant menu board"
      >
        <div className="button-row">
          <ButtonLink href={business.phones[0].href} variant="secondary">
            <PhoneIcon className="icon" /> Ask About Today’s Menu
          </ButtonLink>
        </div>
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="menu-notes" aria-label="Menu pricing notes">
            <p><strong>Precios más tax</strong> / Prices plus tax.</p>
            <p>
              Cualquier orden pedida fuera de la orden se cobrará aparte (tortilla, arroz, frijoles, etc.).
              <span>Additional items ordered separately are charged extra (tortillas, rice, beans, etc.).</span>
            </p>
          </div>

          <aside className="tortilla-menu-feature">
            <p className="eyebrow">Una tradición de la casa</p>
            <h2>Tortillas Hechas a Mano <span>Handmade Tortillas</span></h2>
          </aside>

          <nav className="menu-jump" aria-label="Menu categories">
            {menuCategories.map((category) => (
              <a key={category} href={`#${category.toLowerCase().replaceAll(" ", "-")}`}>{category}</a>
            ))}
          </nav>

          {menuCategories.map((category) => (
            <section className="category" id={category.toLowerCase().replaceAll(" ", "-")} key={category}>
              <div className="category-title"><h2>{category}</h2></div>
              <div className="menu-grid">
                {menuItems.filter((item) => item.category === category).map((item) => (
                  <article className="menu-card" key={`${category}-${item.name}`}>
                    <div className="menu-card-head">
                      <h3>{item.name}{item.englishName && <span>{item.englishName}</span>}</h3>
                      {item.formats.length === 0 && (
                        <span className="price-note">
                          {item.price === null ? "Ask for price" : formatPrice(item.price)}
                        </span>
                      )}
                    </div>
                    {item.formats.length > 0 && (
                      <dl className="format-prices">
                        {item.formats.map((format) => (
                          <div key={format.name}>
                            <dt>{format.name}</dt>
                            <dd>{format.price === null ? "Ask for price" : formatPrice(format.price)}</dd>
                          </div>
                        ))}
                      </dl>
                    )}
                  </article>
                ))}
              </div>
            </section>
          ))}

          <aside className="menu-party-callout">
            <div>
              <p className="eyebrow light">Pedidos especiales</p>
              <h2>Comida Para Tus Fiestas</h2>
              <p>Party offerings are available by advance order. Call for availability and current pricing.</p>
              <ul>
                {partyOfferings.map((item) => (
                  <li key={item.name}><strong>{item.name}</strong>{item.englishName && <span>{item.englishName}</span>}</li>
                ))}
              </ul>
            </div>
            <ButtonLink href="/catering" variant="secondary">View Party Orders</ButtonLink>
          </aside>
        </div>
      </section>
    </>
  );
}
