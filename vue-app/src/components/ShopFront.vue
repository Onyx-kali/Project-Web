<script setup lang="ts">
import { ref } from 'vue'
import './ShopFront.css'
import novaLogo from '../assets/Leuchtendes NOVA-Orbit-Logo-Photoroom.png'

type ThemeMode = 'quartz' | 'onyx' | 'bismuth'

const themeMode = ref<ThemeMode>('onyx')
const themeModeLabels = {
  quartz: 'Quartz',
  onyx: 'Onyx',
  bismuth: 'Bismuth',
}

const categories = ['Neu', 'Sale', 'Elektronik', 'Mode', 'Home', 'Sport']

const featuredProducts = [
  {
    name: 'Wireless Headset',
    price: '89,99 €',
    tag: 'Top Seller',
    accent: 'purple',
  },
  {
    name: 'Minimal Lamp',
    price: '49,99 €',
    tag: 'Neu',
    accent: 'gold',
  },
  {
    name: 'Sneaker Pro',
    price: '119,99 €',
    tag: 'Popular',
    accent: 'green',
  },
  {
    name: 'Smart Watch',
    price: '199,99 €',
    tag: 'Bestseller',
    accent: 'blue',
  },
]
</script>

<template>
  <div class="page-theme" :class="`theme-${themeMode}`">
    <div v-if="themeMode === 'bismuth'" class="bismuth-stars" aria-hidden="true">
      <span class="bismuth-star star-one">✦</span>
      <span class="bismuth-star star-two">✧</span>
      <span class="bismuth-star star-three">✦</span>
      <span class="bismuth-star star-four">✧</span>
      <span class="bismuth-star star-five">✦</span>
      <span class="bismuth-star star-six">✧</span>
      <span class="bismuth-star star-seven">✦</span>
    </div>
    <div class="shop-shell">
      <header class="topbar">
        <div class="brand-wrap">
          <span class="brand-mark">
            <img class="brand-symbol" :src="novaLogo" alt="" />
          </span>
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
          <div class="theme-switcher" role="group" aria-label="Darstellung">
            <button
              class="theme-option"
              :class="{ 'is-active': themeMode === 'quartz' }"
              type="button"
              :aria-pressed="themeMode === 'quartz'"
              @click="themeMode = 'quartz'"
            >
              {{ themeModeLabels.quartz }}
            </button>
            <button
              class="theme-option"
              :class="{ 'is-active': themeMode === 'onyx' }"
              type="button"
              :aria-pressed="themeMode === 'onyx'"
              @click="themeMode = 'onyx'"
            >
              {{ themeModeLabels.onyx }}
            </button>
            <button
              class="theme-option"
              :class="{ 'is-active': themeMode === 'bismuth' }"
              type="button"
              :aria-pressed="themeMode === 'bismuth'"
              @click="themeMode = 'bismuth'"
            >
              {{ themeModeLabels.bismuth }}
            </button>
          </div>
          <button class="cart-btn">Warenkorb (3)</button>
        </div>
      </header>

      <section class="hero">
        <div class="hero-copy">
          <p class="eyebrow">Frühjahrsangebot</p>
          <h1>Your Next Obsession.</h1>
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
  </div>
</template>
