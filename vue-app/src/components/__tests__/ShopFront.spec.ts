import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import ShopFront from '../ShopFront.vue'

describe('ShopFront theme selector', () => {
  it('starts in Onyx and switches among all three themes', async () => {
    const wrapper = mount(ShopFront)
    const theme = wrapper.find('.page-theme')
    const quartzButton = wrapper.get('.theme-option:nth-child(1)')
    const onyxButton = wrapper.get('.theme-option:nth-child(2)')
    const bismuthButton = wrapper.get('.theme-option:nth-child(3)')

    expect(theme.classes()).toContain('theme-onyx')
    expect(quartzButton.text()).toBe('Quartz')
    expect(quartzButton.attributes('aria-pressed')).toBe('false')
    expect(onyxButton.text()).toBe('Onyx')
    expect(onyxButton.classes()).toContain('is-active')
    expect(onyxButton.attributes('aria-pressed')).toBe('true')
    expect(bismuthButton.text()).toBe('Bismuth')
    expect(bismuthButton.attributes('aria-pressed')).toBe('false')

    await bismuthButton.trigger('click')

    expect(theme.classes()).toContain('theme-bismuth')
    expect(bismuthButton.classes()).toContain('is-active')
    expect(bismuthButton.attributes('aria-pressed')).toBe('true')
    expect(wrapper.findAll('.bismuth-star')).toHaveLength(7)
    expect(onyxButton.classes()).not.toContain('is-active')

    await quartzButton.trigger('click')

    expect(theme.classes()).toContain('theme-quartz')
    expect(quartzButton.classes()).toContain('is-active')
    expect(quartzButton.attributes('aria-pressed')).toBe('true')
    expect(wrapper.find('.bismuth-stars').exists()).toBe(false)

    await onyxButton.trigger('click')

    expect(theme.classes()).toContain('theme-onyx')
    expect(onyxButton.classes()).toContain('is-active')
  })
})
