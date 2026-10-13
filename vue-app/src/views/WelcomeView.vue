<script setup lang="ts">
import { useRouter } from 'vue-router'
import novaLogo from '../assets/Leuchtendes NOVA-Orbit-Logo.png'

const router = useRouter()

function enterShop() {
  void router.push({ name: 'home' })
}
</script>

<template>
  <main class="welcome-page" @click="enterShop">
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
  position: relative;
  display: grid;
  min-height: 100vh;
  min-height: 100svh;
  place-items: center;
  overflow: hidden;
  padding: 36px 24px;
  color: #171821;
  background-color: #fbfcfa;
  background-image:
    linear-gradient(rgba(24, 31, 28, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(24, 31, 28, 0.035) 1px, transparent 1px);
  background-size: 56px 56px;
  cursor: pointer;
}

.welcome-content {
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
  color: #50565e;
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
  color: #5d646a;
  font-size: 1rem;
}

.welcome-copy h1 {
  margin: 0;
  font-size: 2.75rem;
  line-height: 1.08;
  text-wrap: balance;
}

.welcome-copy h1 span {
  color: #5143ce;
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
  color: #11140c;
  background: #d9f36a;
  font: inherit;
  font-size: 1.05rem;
  font-weight: 750;
  cursor: pointer;
  transition: background-color 160ms ease, transform 160ms ease;
}

.welcome-button:hover {
  background: #c8e94a;
  transform: translateY(-2px);
}

.welcome-button:focus-visible {
  outline: 3px solid #5143ce;
  outline-offset: 4px;
}

.welcome-button span {
  font-size: 1.35rem;
  line-height: 1;
}

.welcome-footer {
  position: absolute;
  right: 28px;
  bottom: 24px;
  display: flex;
  gap: 10px;
  color: #343a3e;
}

.welcome-footer span {
  color: #858b8e;
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