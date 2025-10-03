// src/types/bcms-augment.d.ts

import type {
  MealTypeEntryMeta,
  SeasonEntryMeta,
  FoodItemEntryMeta,
  HomePageEntryMeta,
  MenuPageEntryMeta,
  ReservationPageEntryMeta,
  ContactPageEntryMeta,
  EventsPageEntryMeta,
} from "../../bcms/types/ts";

declare module "../../bcms/types/ts" {
  interface MealTypeEntryMeta {
    [lang: string]: MealTypeEntryMetaItem;
  }
  interface SeasonEntryMeta {
    [lang: string]: SeasonEntryMetaItem;
  }
  interface FoodItemEntryMeta {
    [lang: string]: FoodItemEntryMetaItem;
  }
  interface HomePageEntryMeta {
    [lang: string]: HomePageEntryMetaItem;
  }
  interface MenuPageEntryMeta {
    [lang: string]: MenuPageEntryMetaItem;
  }
  interface ReservationPageEntryMeta {
    [lang: string]: ReservationPageEntryMetaItem;
  }
  interface ContactPageEntryMeta {
    [lang: string]: ContactPageEntryMetaItem;
  }
  interface EventsPageEntryMeta {
    [lang: string]: EventsPageEntryMetaItem;
  }
}
