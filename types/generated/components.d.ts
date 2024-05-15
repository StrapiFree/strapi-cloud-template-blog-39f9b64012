import type { Schema, Attribute } from '@strapi/strapi';

export interface DynamicAnalyticsMainPlusDashboardDynamicAnalyticsMainPlusDashboard
  extends Schema.Component {
  collectionName: 'components_dynamic_analytics_main_plus_dashboard_dynamic_analytics_main_plus_dashboards';
  info: {
    displayName: 'dynamicAnalyticsMainPlusDashboard';
    description: '';
  };
  attributes: {
    cardTitle: Attribute.String & Attribute.Required;
    cardSubtitle: Attribute.String & Attribute.Required;
    authorImg: Attribute.Media & Attribute.Required;
    authorDescription: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'Economist with master`s degree, Forex analyst, with more than 10 years of experience, participant of various international conferences on marketing and economics, author of more than 1000 analytical reviews and forecasts with an accuracy of up to 75%, author of scientific research on economics and marketing.'>;
    cardImg: Attribute.Media & Attribute.Required;
    tradePair: Attribute.Enumeration<['technical', 'fundamental', 'economic']> &
      Attribute.Required;
    cardTypeSelect: Attribute.Enumeration<
      ['technical', 'fundamental', 'economic']
    > &
      Attribute.Required;
    authorOfAnalytics: Attribute.Enumeration<['Stanislav Litinsky']> &
      Attribute.Required &
      Attribute.DefaultTo<'Stanislav Litinsky'>;
    cardNameTabSelect: Attribute.Enumeration<
      ['Technical analysis', 'Fundamental analysis', 'Economic news']
    > &
      Attribute.Required;
    publishedDateAndTime: Attribute.DateTime & Attribute.Required;
    analyticsBlockText: Attribute.Blocks & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'dynamic-analytics-main-plus-dashboard.dynamic-analytics-main-plus-dashboard': DynamicAnalyticsMainPlusDashboardDynamicAnalyticsMainPlusDashboard;
    }
  }
}
