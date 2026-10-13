<script setup lang="ts">
import './ShopFront.css'

const categories = ['Neu', 'Sale', 'Elektronik', 'Mode', 'Home', 'Sport']

const featuredProducts = [
  {
    name: 'Wireless Headset',
    price: '89,99 €',
    tag: 'Top Seller',
    accent: 'purple'
  },
  {
    name: 'Minimal Lamp',
    price: '49,99 €',
    tag: 'Neu',
    accent: 'gold'
  },
  {
    name: 'Sneaker Pro',
    price: '119,99 €',
    tag: 'Popular',
    accent: 'green'
  },
  {
    name: 'Smart Watch',
    price: '199,99 €',
    tag: 'Bestseller',
    accent: 'blue'
  }
]
</script>

<template>
  <div class="shop-shell">
    <header class="topbar">
      <div class="brand-wrap">
        <div class="brand-mark">*</div>
        <span class="brand-name">NOVA</span>
      </div>

      <nav class="main-nav" aria-label="Main navigation">
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">Categories</a>
        <a href="#">Deals</a>
      </nav>

      <div class="top-actions">
        <button class="ghost-btn">Suche</button>
        <button class="cart-btn">Warenkorb (3)</button>
      </div>
    </header>

    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">Frühjahrsangebot</p>
        <h1>Shop smarter.</h1>
        <p class="hero-text">
          Entdecke moderne Produkte für den Alltag – stilvoll, funktional und günstig.
        </p>

        <div class="hero-actions">
          <button class="primary-btn">Jetzt shoppen</button>
          <button class="secondary-btn">Mehr erfahren</button>
        </div>

        <div class="hero-stats">
          <div>
            <strong>12k+</strong>
            <span>Bestellungen</span>
          </div>
          <div>
            <strong>4.9/5</strong>
            <span>Kundenbewertung</span>
          </div>
          <div>
            <strong>48h</strong>
            <span>Versand</span>
          </div>
        </div>
      </div>

      <div class="hero-visual" aria-label="Featured product card">
        <div class="visual-card large-card">
          <span class="mini-tag">Featured</span>
          <div class="product-glow" />
          <div class="product-box">
            <div class="box-shape" />
          </div>
        </div>
      </div>
    </section>

    <section class="category-strip">
      <div class="section-head">
        <h2>Kategorien</h2>
      </div>

      <div class="category-list">
        <button v-for="category in categories" :key="category" class="category-pill">
          {{ category }}
        </button>
      </div>
    </section>

    <section class="products-section">
      <div class="section-head split">
        <h2>Beliebt</h2>
        <a href="#">Alle ansehen</a>
      </div>

      <div class="product-grid">
        <article v-for="product in featuredProducts" :key="product.name" class="product-card">
          <div class="product-image" :class="product.accent">
            <span class="product-badge">{{ product.tag }}</span>
          </div>
          <div class="product-info">
            <h3>{{ product.name }}</h3>
            <div class="product-meta">
              <span class="price">{{ product.price }}</span>
              <button>In den Warenkorb</button>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section class="promo-banner">
      <div>
        <p>Limited Time Offer</p>
        <h3>Bis zu 30% Rabatt auf ausgewählte Artikel</h3>
      </div>
      <button class="primary-btn">Jetzt sparen</button>
    </section>
  </div>
</template>