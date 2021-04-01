<template>
  <div class="products">
    <div class="swiper-container">
      <div class="products__header">
        <h2 class="products__title">Просмотренные товары</h2>
        <div class="products__slider-interface">
          <button class="slider__button_prev slider__button">
            <img src="button_prev.svg" alt="" />
          </button>
          <div class="slider__pagination">
            <p class="slider__total">
              <span class="slider__current">1 </span>/ 6
            </p>
          </div>
          <button class="slider__button_next slider__button">
            <img src="button_next.svg" alt="" />
          </button>
        </div>
      </div>
      <div class="products__list swiper-wrapper">
        <div
          class="product__card product-card swiper-slide"
          v-for="product in allProducts"
          :key="product.id"
          :data-id="product.id"
        >
          <img :src="product.img" alt="" />
          <p class="product-card__title">{{ product.title }}</p>
          <p class="product-card__desc">{{ product.body }}</p>
          <div class="product-card__price">
            <span class="product-card__price_rub"
              >{{ product.minPrice }} ₽ -</span
            >
            <span class="product-card__price_rub">
              {{ product.maxPrice }} ₽</span
            >
          </div>
          <div class="product-card__price">
            <span class="product-card__price_eur"
              >{{ Math.floor(product.minPrice / 88) }} € -</span
            >
            <span class="product-card__price_eur">
              {{ Math.floor(product.maxPrice / 88) }} €</span
            ><br />
          </div>
          <button class="product-card__button">Подробнее</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
SwiperCore.use([Navigation, Pagination]);

export default {
  name: "Products",
  computed: mapGetters(["allProducts"]),
  methods: mapActions(["fetchProducts"]),
  mounted() {
    this.fetchProducts();
  },
  updated() {
    const swiper = new Swiper(".swiper-container", {
      direction: "horizontal",
      pagination: {
        el: ".slider__pagination",
        type: "fraction",
        currentClass: "slider__current",
        totalClass: "slider__total",
      },
      navigation: {
        nextEl: ".slider__button_next",
        prevEl: ".slider__button_prev",
      },
      slidesPerView: 4,
      spaceBetween: 20,
      simulateTouch: false,
    });
  },
};
</script>