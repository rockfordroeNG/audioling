import type { CSSProperties } from 'react';
import { defaultDarkTheme } from '@/themes/default-dark.ts';

export type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type AppThemeConfiguration = {
    components: {
        'player-progress': {
            'handle-active-background-color': CSSProperties['backgroundColor'];
            'handle-background-color': CSSProperties['backgroundColor'];
            'handle-border-radius': CSSProperties['borderRadius'];
            'handle-height': CSSProperties['height'];
            'handle-hover-background-color': CSSProperties['backgroundColor'];
            'handle-width': CSSProperties['width'];
            'track-active-background-color': CSSProperties['backgroundColor'];
            'track-background-color': CSSProperties['backgroundColor'];
            'track-height': CSSProperties['height'];
            'track-max-width': CSSProperties['maxWidth'];
            'track-width': CSSProperties['width'];
        };
        'side-nav-item': {
            'active-background-color': CSSProperties['backgroundColor'];
            'active-font-color': CSSProperties['color'];
            'background-color': CSSProperties['backgroundColor'];
            'background-hover-color': CSSProperties['backgroundColor'];
            'border-radius': CSSProperties['borderRadius'];
            'font-color': CSSProperties['color'];
            'font-hover-color': CSSProperties['color'];
            padding: CSSProperties['padding'];
        };
    };
    name: string;
    theme: {
        'base-border-radius-lg': CSSProperties['borderRadius'];
        'base-border-radius-md': CSSProperties['borderRadius'];
        'base-border-radius-sm': CSSProperties['borderRadius'];
        'base-border-radius-xl': CSSProperties['borderRadius'];
        'base-border-radius-xs': CSSProperties['borderRadius'];
        'base-font-size-lg': CSSProperties['fontSize'];
        'base-font-size-md': CSSProperties['fontSize'];
        'base-font-size-sm': CSSProperties['fontSize'];
        'base-font-size-xl': CSSProperties['fontSize'];
        'base-font-size-xs': CSSProperties['fontSize'];
        'base-font-weight-lg': CSSProperties['fontWeight'];
        'base-font-weight-md': CSSProperties['fontWeight'];
        'base-font-weight-sm': CSSProperties['fontWeight'];
        'base-font-weight-xl': CSSProperties['fontWeight'];
        'base-font-weight-xs': CSSProperties['fontWeight'];
        'base-gap-lg': CSSProperties['gap'];
        'base-gap-md': CSSProperties['gap'];
        'base-gap-sm': CSSProperties['gap'];
        'base-gap-xl': CSSProperties['gap'];
        'base-gap-xs': CSSProperties['gap'];
        'base-title-font-size-lg': CSSProperties['fontSize'];
        'base-title-font-size-md': CSSProperties['fontSize'];
        'base-title-font-size-sm': CSSProperties['fontSize'];
        'base-title-font-size-xl': CSSProperties['fontSize'];
        'base-title-font-size-xs': CSSProperties['fontSize'];
        'base-title-font-weight-lg': CSSProperties['fontWeight'];
        'base-title-font-weight-md': CSSProperties['fontWeight'];
        'base-title-font-weight-sm': CSSProperties['fontWeight'];
        'base-title-font-weight-xl': CSSProperties['fontWeight'];
        'base-title-font-weight-xs': CSSProperties['fontWeight'];
        'breakpoint-lg': CSSProperties['width'];
        'breakpoint-md': CSSProperties['width'];
        'breakpoint-sm': CSSProperties['width'];
        'breakpoint-xl': CSSProperties['width'];
        'breakpoint-xxl': CSSProperties['width'];
        'breakpoint-xxxl': CSSProperties['width'];
        'button-danger-background-color': CSSProperties['backgroundColor'];
        'button-danger-border': CSSProperties['border'];
        'button-danger-font-color': CSSProperties['color'];
        'button-danger-hover-background-color': CSSProperties['backgroundColor'];
        'button-danger-hover-border': CSSProperties['border'];
        'button-danger-hover-font-color': CSSProperties['color'];
        'button-default-background-color': CSSProperties['backgroundColor'];
        'button-default-border': CSSProperties['border'];
        'button-default-font-color': CSSProperties['color'];
        'button-default-hover-background-color': CSSProperties['backgroundColor'];
        'button-default-hover-border': CSSProperties['border'];
        'button-default-hover-font-color': CSSProperties['color'];
        'button-filled-background-color': CSSProperties['backgroundColor'];
        'button-filled-border': CSSProperties['border'];
        'button-filled-font-color': CSSProperties['color'];
        'button-filled-hover-background-color': CSSProperties['backgroundColor'];
        'button-filled-hover-border': CSSProperties['border'];
        'button-filled-hover-font-color': CSSProperties['color'];
        'button-outline-background-color': CSSProperties['backgroundColor'];
        'button-outline-border': CSSProperties['border'];
        'button-outline-font-color': CSSProperties['color'];
        'button-outline-hover-background-color': CSSProperties['backgroundColor'];
        'button-outline-hover-border': CSSProperties['border'];
        'button-outline-hover-font-color': CSSProperties['color'];
        'button-primary-background-color': CSSProperties['backgroundColor'];
        'button-primary-border': CSSProperties['border'];
        'button-primary-font-color': CSSProperties['color'];
        'button-primary-hover-background-color': CSSProperties['backgroundColor'];
        'button-primary-hover-border': CSSProperties['border'];
        'button-primary-hover-font-color': CSSProperties['color'];
        'button-subtle-background-color': CSSProperties['backgroundColor'];
        'button-subtle-border': CSSProperties['border'];
        'button-subtle-font-color': CSSProperties['color'];
        'button-subtle-hover-background-color': CSSProperties['backgroundColor'];
        'button-subtle-hover-border': CSSProperties['border'];
        'button-subtle-hover-font-color': CSSProperties['color'];
        'checkbox-background-color': CSSProperties['backgroundColor'];
        'checkbox-border': CSSProperties['border'];
        'checkbox-border-radius': CSSProperties['borderRadius'];
        'checkbox-checked-background-color': CSSProperties['backgroundColor'];
        'checkbox-checked-border-color': CSSProperties['borderColor'];
        'global-background-color': CSSProperties['color'];
        'global-danger-color': CSSProperties['color'];
        'global-font-color': CSSProperties['color'];
        'global-font-family': CSSProperties['fontFamily'];
        'global-font-secondary-color': CSSProperties['color'];
        'global-font-size': CSSProperties['fontSize'];
        'global-info-color': CSSProperties['color'];
        'global-primary-color': CSSProperties['color'];
        'global-success-color': CSSProperties['color'];
        'global-warning-color': CSSProperties['color'];
        'input-background-color': CSSProperties['backgroundColor'];
        'input-border': CSSProperties['border'];
        'input-font-color': CSSProperties['color'];
        'input-hover-background-color': CSSProperties['backgroundColor'];
        'input-hover-border': CSSProperties['border'];
        'input-hover-font-color': CSSProperties['color'];
        'input-hover-placeholder-color': CSSProperties['color'];
        'input-indicator-background-color': CSSProperties['backgroundColor'];
        'input-placeholder-color': CSSProperties['color'];
        'layout-base-border-radius': CSSProperties['borderRadius'];
        'layout-base-padding': CSSProperties['padding'];
        'layout-border-color': CSSProperties['borderColor'];
        'layout-border-focus-color': CSSProperties['borderColor'];
        'layout-content-background-color': CSSProperties['backgroundColor'];
        'layout-content-padding': CSSProperties['padding'];
        'layout-divider-color': CSSProperties['borderColor'];
        'layout-divider-height': CSSProperties['height'];
        'layout-drag-handle-background-color': CSSProperties['backgroundColor'];
        'layout-header-background-color': CSSProperties['backgroundColor'];
        'layout-header-height': CSSProperties['height'];
        'layout-nav-bar-bottom-background-color': CSSProperties['backgroundColor'];
        'layout-nav-bar-bottom-border-bottom': CSSProperties['border'];
        'layout-nav-bar-bottom-border-left': CSSProperties['border'];
        'layout-nav-bar-bottom-border-right': CSSProperties['border'];
        'layout-nav-bar-bottom-border-top': CSSProperties['border'];
        'layout-nav-bar-bottom-font-color': CSSProperties['color'];
        'layout-nav-bar-bottom-height': CSSProperties['height'];
        'layout-nav-bar-bottom-item-hover-background-color': CSSProperties['backgroundColor'];
        'layout-nav-bar-bottom-item-hover-font-color': CSSProperties['color'];
        'layout-nav-bar-side-background-color': CSSProperties['backgroundColor'];
        'layout-nav-bar-side-border-bottom': CSSProperties['border'];
        'layout-nav-bar-side-border-left': CSSProperties['border'];
        'layout-nav-bar-side-border-right': CSSProperties['border'];
        'layout-nav-bar-side-border-top': CSSProperties['border'];
        'layout-nav-bar-side-font-color': CSSProperties['color'];
        'layout-nav-bar-side-height': CSSProperties['height'];
        'layout-nav-bar-side-item-hover-background-color': CSSProperties['backgroundColor'];
        'layout-nav-bar-side-item-hover-font-color': CSSProperties['color'];
        'layout-nav-bar-side-padding': CSSProperties['padding'];
        'layout-player-bar-background-color': CSSProperties['backgroundColor'];
        'layout-player-bar-border-bottom': CSSProperties['border'];
        'layout-player-bar-border-left': CSSProperties['border'];
        'layout-player-bar-border-radius': CSSProperties['borderRadius'];
        'layout-player-bar-border-right': CSSProperties['border'];
        'layout-player-bar-border-top': CSSProperties['border'];
        'layout-player-bar-height': CSSProperties['height'];
        'layout-player-bar-padding': CSSProperties['padding'];
        'layout-side-nav-bar-background-color': CSSProperties['backgroundColor'];
        'layout-side-nav-bar-font-color': CSSProperties['color'];
        'layout-side-nav-bar-font-hover-color': CSSProperties['color'];
        'menu-background-color': CSSProperties['backgroundColor'];
        'menu-border': CSSProperties['border'];
        'menu-border-radius': CSSProperties['borderRadius'];
        'menu-box-shadow': CSSProperties['boxShadow'];
        'menu-divider-border-top': CSSProperties['borderTop'];
        'menu-divider-margin': CSSProperties['margin'];
        'menu-item-background-color': CSSProperties['backgroundColor'];
        'menu-item-font-color': CSSProperties['color'];
        'menu-item-font-size': CSSProperties['fontSize'];
        'menu-item-font-weight': CSSProperties['fontWeight'];
        'menu-item-hover-background-color': CSSProperties['backgroundColor'];
        'menu-item-hover-font-color': CSSProperties['color'];
        'menu-item-padding': CSSProperties['padding'];
        'menu-padding': CSSProperties['padding'];
        'modal-background-color': CSSProperties['backgroundColor'];
        'modal-border': CSSProperties['border'];
        'modal-border-radius': CSSProperties['borderRadius'];
        'modal-font-color': CSSProperties['color'];
        'modal-font-size': CSSProperties['fontSize'];
        'modal-font-weight': CSSProperties['fontWeight'];
        'modal-padding': CSSProperties['padding'];
        'modal-title-font-size': CSSProperties['fontSize'];
        'modal-title-font-weight': CSSProperties['fontWeight'];
        'paper-background-color': CSSProperties['backgroundColor'];
        'paper-border-radius': CSSProperties['borderRadius'];
        'paper-padding': CSSProperties['padding'];
        'scroll-bar-size': CSSProperties['width'];
        'scroll-bar-thumb-active-background-color': CSSProperties['backgroundColor'];
        'scroll-bar-thumb-background-color': CSSProperties['backgroundColor'];
        'scroll-bar-thumb-border-radius': CSSProperties['borderRadius'];
        'scroll-bar-thumb-hover-background-color': CSSProperties['backgroundColor'];
        'scroll-bar-track-active-background-color': CSSProperties['backgroundColor'];
        'scroll-bar-track-background-color': CSSProperties['backgroundColor'];
        'scroll-bar-track-border-radius': CSSProperties['borderRadius'];
        'scroll-bar-track-hover-background-color': CSSProperties['backgroundColor'];
        'skeleton-animation-duration': CSSProperties['animationDuration'];
        'skeleton-background-color': CSSProperties['backgroundColor'];
        'skeleton-border-radius': CSSProperties['borderRadius'];
        'skeleton-highlight-color': CSSProperties['color'];
        'switch-background-color': CSSProperties['backgroundColor'];
        'switch-border-radius': CSSProperties['borderRadius'];
        'switch-checked-background-color': CSSProperties['backgroundColor'];
        'switch-checked-border': CSSProperties['borderColor'];
        'switch-checked-thumb-background-color': CSSProperties['backgroundColor'];
        'switch-checked-thumb-border': CSSProperties['borderColor'];
        'switch-thumb-background-color': CSSProperties['backgroundColor'];
        'switch-thumb-border-color': CSSProperties['borderColor'];
        'switch-thumb-border-radius': CSSProperties['borderRadius'];
        'table-border-color': CSSProperties['borderColor'];
        'table-cell-border-color': CSSProperties['borderColor'];
        'table-group-background-color': CSSProperties['backgroundColor'];
        'table-group-font-color': CSSProperties['color'];
        'table-header-background-color': CSSProperties['backgroundColor'];
        'table-header-font-color': CSSProperties['color'];
        'table-row-background-color': CSSProperties['backgroundColor'];
        'table-row-border-color': CSSProperties['borderColor'];
        'table-row-config-comfortable-height': CSSProperties['height'];
        'table-row-config-condensed-height': CSSProperties['height'];
        'table-row-config-normal-height': CSSProperties['height'];
        'table-row-font-color': CSSProperties['color'];
        'table-row-hover-background-color': CSSProperties['backgroundColor'];
        'table-row-hover-border-color': CSSProperties['borderColor'];
        'table-row-hover-font-color': CSSProperties['color'];
        'table-row-selected-background-color': CSSProperties['backgroundColor'];
        'table-row-selected-border-color': CSSProperties['borderColor'];
        'table-row-selected-font-color': CSSProperties['color'];
        'tooltip-background-color': CSSProperties['backgroundColor'];
        'tooltip-border-radius': CSSProperties['borderRadius'];
        'tooltip-box-shadow': CSSProperties['boxShadow'];
        'tooltip-font-color': CSSProperties['color'];
        'tooltip-font-size': CSSProperties['fontSize'];
        'tooltip-font-weight': CSSProperties['fontWeight'];
        'tooltip-padding': CSSProperties['padding'];
    };
    type: 'light' | 'dark';
};

export const themes: { [key: string]: AppThemeConfiguration } = {
    defaultDark: defaultDarkTheme,
};
