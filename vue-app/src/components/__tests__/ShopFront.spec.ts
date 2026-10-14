import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import ShopFront from '../ShopFront.vue'

describe('ShopFront theme selector', () => {
  it('starts in dark mode and selects either mode directly', async () => {
    const wrapper = mount(ShopFront)
    const theme = wrapper.find('.page-theme')
    const lightModeButton = wrapper.find('.theme-option:first-child')
    const darkModeButton = wrapper.find('.theme-option:last-child')

    expect(theme.classes()).toContain('theme-dark')
    expect(lightModeButton.text()).toBe('Hellmodus')
    expect(lightModeButton.classes()).not.toContain('is-active')
    expect(lightModeButton.attributes('aria-pressed')).toBe('false')
    expect(darkModeButton.text()).toBe('Dunkelmodus')
    expect(darkModeButton.classes()).toContain('is-active')
    expect(darkModeButton.attributes('aria-pressed')).toBe('true')

    await lightModeButton.trigger('click')

    expect(theme.classes()).not.toContain('theme-dark')
    expect(lightModeButton.classes()).toContain('is-active')
    expect(lightModeButton.attributes('aria-pressed')).toBe('true')
    expect(darkModeButton.classes()).not.toContain('is-active')
    expect(darkModeButton.attributes('aria-pressed')).toBe('false')

    await darkModeButton.trigger('click')

    expect(theme.classes()).toContain('theme-dark')
    expect(darkModeButton.classes()).toContain('is-active')
    expect(darkModeButton.attributes('aria-pressed')).toBe('true')
  })
})
