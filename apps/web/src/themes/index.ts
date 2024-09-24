import type { CSSProperties } from 'react';
import type { MantineTheme } from '@mantine/core';
import { defaultDarkTheme } from '@/themes/default-dark.ts';

export type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type AppThemeConfiguration = {
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
        'input-hover-font-color': CSSProperties['color'];
        'input-hover-placeholder-color': CSSProperties['color'];
        'input-placeholder-color': CSSProperties['color'];
        'layout-header-height': CSSProperties['height'];
        'layout-player-bar-background-color': CSSProperties['backgroundColor'];
        'layout-player-bar-border-bottom': CSSProperties['border'];
        'layout-player-bar-border-left': CSSProperties['border'];
        'layout-player-bar-border-radius': CSSProperties['borderRadius'];
        'layout-player-bar-border-right': CSSProperties['border'];
        'layout-player-bar-border-top': CSSProperties['border'];
        'layout-player-bar-height': CSSProperties['height'];
        'layout-player-bar-margin': CSSProperties['margin'];
        'layout-player-bar-padding': CSSProperties['padding'];
        'layout-side-bar-left-background-color': CSSProperties['backgroundColor'];
        'layout-side-bar-left-font-color': CSSProperties['color'];
        'layout-side-bar-left-font-hover-color': CSSProperties['color'];
        'layout-side-bar-left-width': CSSProperties['width'];
        'layout-side-bar-right-background-color': CSSProperties['backgroundColor'];
        'layout-side-bar-right-width': CSSProperties['width'];
        'scroll-bar-size': CSSProperties['width'];
        'scroll-bar-thumb-active-background-color': CSSProperties['backgroundColor'];
        'scroll-bar-thumb-background-color': CSSProperties['backgroundColor'];
        'scroll-bar-thumb-hover-background-color': CSSProperties['backgroundColor'];
        'scroll-bar-track-active-background-color': CSSProperties['backgroundColor'];
        'scroll-bar-track-background-color': CSSProperties['backgroundColor'];
        'scroll-bar-track-hover-background-color': CSSProperties['backgroundColor'];
        'table-border-color': CSSProperties['borderColor'];
        'table-cell-border-color': CSSProperties['borderColor'];
        'table-header-background-color': CSSProperties['backgroundColor'];
        'table-header-font-color': CSSProperties['color'];
        'table-row-background-color': CSSProperties['backgroundColor'];
        'table-row-border-color': CSSProperties['borderColor'];
        'table-row-font-color': CSSProperties['color'];
        'table-row-hover-background-color': CSSProperties['backgroundColor'];
        'table-row-hover-border-color': CSSProperties['borderColor'];
        'table-row-hover-font-color': CSSProperties['color'];
        'table-row-selected-background-color': CSSProperties['backgroundColor'];
        'table-row-selected-border-color': CSSProperties['borderColor'];
        'table-row-selected-font-color': CSSProperties['color'];
    };
    type: 'light' | 'dark';
};

export const themes: { [key: string]: AppThemeConfiguration } = {
    defaultDark: defaultDarkTheme,
};

export const baseMantineTheme: Partial<MantineTheme> = {
    focusRing: 'never',
};
