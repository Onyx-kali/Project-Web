<script setup lang="ts">
import { useRouter } from 'vue-router'
import novaLogo from '../assets/Leuchtendes NOVA-Orbit-Logo-Photoroom.png'

const router = useRouter()

function enterShop() {
  void router.push({ name: 'home' })
}
</script>

<template>
  <main class="welcome-page" @click="enterShop">
    <div class="welcome-stars" aria-hidden="true">
      <span class="welcome-star star-one">✦</span>
      <span class="welcome-star star-two">✧</span>
      <span class="welcome-star star-three">✦</span>
      <span class="welcome-star star-four">✧</span>
      <span class="welcome-star star-five">✦</span>
      <span class="welcome-star star-six">✧</span>
      <span class="welcome-star star-seven">✦</span>
    </div>
    <div class="welcome-content">
      <p class="welcome-kicker">NOVA · NEU ENTDECKEN</p>
      <img class="welcome-logo" :src="novaLogo" alt="NOVA Orbit-Logo" />
      <div class="welcome-copy">
        <p>Schön, dass du da bist.</p>
        <h1>Willkommen bei <span>NOVA</span></h1>
      </div>
      <button class="welcome-button" type="button" @click.stop="enterShop">
        Shop entdecken
        <span aria-hidden="true">→</span>
      </button>
    </div>
    <p class="welcome-footer">NOVA <span>ONLINE SHOP</span></p>
  </main>
</template>

<style scoped>
.welcome-page {
  --nova-night: #090817;
  --nova-indigo: #241959;
  --nova-lavender: #c4baff;
  --nova-star: #eeeaff;

  position: relative;
  display: grid;
  min-height: 100vh;
  min-height: 100svh;
  place-items: center;
  overflow: hidden;
  padding: 36px 24px;
  color: #f7f5ff;
  background:
    radial-gradient(ellipse at 50% 38%, rgba(79, 56, 174, 0.38), transparent 48%),
    radial-gradient(ellipse at 86% 92%, rgba(50, 33, 124, 0.28), transparent 42%),
    var(--nova-night);
  cursor: pointer;
}

.welcome-stars {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.welcome-star {
  position: absolute;
  color: var(--nova-star);
  opacity: 0.72;
  animation: star-glow 3.8s ease-in-out infinite alternate;
}

.star-one {
  top: 14%;
  left: 16%;
  font-size: 1.25rem;
}

.star-two {
  top: 25%;
  right: 17%;
  color: var(--nova-lavender);
  font-size: 1.8rem;
  animation-delay: 900ms;
}

.star-three {
  top: 53%;
  left: 8%;
  font-size: 0.95rem;
  animation-delay: 400ms;
}

.star-four {
  top: 61%;
  right: 9%;
  color: var(--nova-lavender);
  font-size: 1.2rem;
  animation-delay: 1.4s;
}

.star-five {
  bottom: 17%;
  left: 23%;
  color: var(--nova-lavender);
  font-size: 1.5rem;
  animation-delay: 1.1s;
}

.star-six {
  right: 27%;
  bottom: 13%;
  font-size: 0.95rem;
  animation-delay: 600ms;
}

.star-seven {
  top: 12%;
  right: 39%;
  font-size: 0.8rem;
  animation-delay: 1.8s;
}

.welcome-content {
  position: relative;
  z-index: 1;
  display: flex;
  width: min(100%, 620px);
  flex-direction: column;
  align-items: center;
  gap: 24px;
  text-align: center;
  animation: welcome-arrive 700ms cubic-bezier(0.2, 0.7, 0.2, 1) both;
}

.welcome-kicker,
.welcome-footer {
  margin: 0;
  font-size: 0.75rem;
  font-weight: 750;
}

.welcome-kicker {
  color: #c6beff;
}

.welcome-logo {
  display: block;
  width: min(68vw, 25rem);
  max-height: 42svh;
  aspect-ratio: 1;
  object-fit: contain;
  animation: logo-arrive 850ms 80ms cubic-bezier(0.2, 0.7, 0.2, 1) both;
}

.welcome-copy > p {
  margin: 0 0 8px;
  color: #c5c1d7;
  font-size: 1rem;
}

.welcome-copy h1 {
  margin: 0;
  font-size: 2.75rem;
  line-height: 1.08;
  text-wrap: balance;
}

.welcome-copy h1 span {
  color: var(--nova-lavender);
}

.welcome-button {
  display: inline-flex;
  min-height: 62px;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 0 26px;
  border: 0;
  border-radius: 4px;
  color: #151126;
  background: #d8d2ff;
  font: inherit;
  font-size: 1.05rem;
  font-weight: 750;
  cursor: pointer;
  transition: background-color 160ms ease, transform 160ms ease;
}

.welcome-button:hover {
  background: #eeeaff;
  transform: translateY(-2px);
}

.welcome-button:focus-visible {
  outline: 3px solid #a99aff;
  outline-offset: 4px;
}

.welcome-button span {
  font-size: 1.35rem;
  line-height: 1;
}

.welcome-footer {
  position: absolute;
  z-index: 1;
  right: 28px;
  bottom: 24px;
  display: flex;
  gap: 10px;
  color: #e6e2f8;
}

.welcome-footer span {
  color: #9992bd;
}

@keyframes star-glow {
  from {
    opacity: 0.38;
    transform: scale(0.86);
  }

  to {
    opacity: 0.95;
    transform: scale(1.08);
  }
}

@keyframes welcome-arrive {
  from {
    opacity: 0;
    transform: translateY(14px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes logo-arrive {
  from {
    opacity: 0;
    transform: scale(0.96);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

@media (max-width: 600px) {
  .welcome-page {
    padding: 28px 20px 64px;
  }

  .welcome-content {
    gap: 20px;
  }

  .welcome-logo {
    width: min(70vw, 20rem);
    max-height: 34svh;
  }

  .welcome-copy h1 {
    font-size: 2.2rem;
  }

  .star-one {
    left: 8%;
  }

  .star-two {
    right: 8%;
  }

  .star-five {
    left: 12%;
  }

  .star-six {
    right: 13%;
  }

  .welcome-footer {
    right: 20px;
    bottom: 18px;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>