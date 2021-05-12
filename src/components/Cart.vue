<template>
  <div class="cart">
    <div class="cart__top">
      <p class="cart-top__name">Ваша корзина</p>
      <p class="cart-top__count">{{ allcartItems.length }} товара</p>
      <p class="cart-top__price">{{ cartTotalPrice }} ₽</p>
    </div>
    <div class="cart__wrapper">
      <div class="cart__column_left">
        <div class="cart__header">
          <h1 class="cart__title">Ваша корзина</h1>
          <span class="cart__count">{{ cartTotalCount }} товара</span>
          <button class="cart__delete-all" @click="сlearCart()">
            Очистить корзину
          </button>
        </div>
        <div class="cart__list">
          <div
            class="cart__item cart-item"
            v-for="cartItem in allcartItems"
            :key="cartItem.id"
            :data-id="cartItem.id"
          >
            <img :src="cartItem.img" alt="" class="cart-item__img" />
            <div class="cart-item__text-block">
              <p class="cart-item__title">{{ cartItem.title }}</p>
              <p class="cart-item__info">{{ cartItem.body }}</p>
              <p class="cart-item__code">Артикул:{{ cartItem.code }}</p>
            </div>
            <div class="cart-item__quantity-wrapper">
              <div class="cart-item__quantity-block">
                <button
                  class="cart-item__button_deg"
                  @click="changeQuantity(cartItem.id, $event)"
                  data-arg="-1"
                >
                  -
                </button>
                <p class="cart-item__quantity">{{ cartItem.quantity }}</p>
                <button
                  class="cart-item__button_incrs"
                  @click="changeQuantity(cartItem.id, $event)"
                  data-arg="1"
                >
                  +
                </button>
              </div>
              <p class="cart-item__price-one" v-if="cartItem.quantity > 1">
                {{
                  cartItem.price
                    .toString()
                    .replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, "$& ")
                }}
                ₽/шт.
              </p>
            </div>
            <p class="cart-item__price">
              {{
                (cartItem.price * cartItem.quantity)
                  .toString()
                  .replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, "$& ")
                  .toString()
                  .replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, "$& ")
              }}
              ₽
            </p>
            <button class="cart-item__delete" @click="deleteItem(cartItem.id)">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1L13 13" stroke="#1F2432" stroke-width="1.5" />
                <path d="M1 13L13 1" stroke="#1F2432" stroke-width="1.5" />
              </svg>
            </button>
          </div>
        </div>
        <div class="cart__checkbox-block">
          <input type="checkbox" @click="changeCheckboxStatus($event)" />
          <img src="installation.svg" alt="" />
          <p class="cart__checkbox-block__text">
            <span>Установка</span><br />
            Отметьте, если Вам необходима консультация профессионала по монтажу
            выбранных товаров.
          </p>
        </div>
      </div>
      <div class="cart__column_right">
        <div class="cart__total cart-total">
          <h3 class="cart-total__title">Итого</h3>
          <div class="cart-total__total-price">
            <span>Сумма заказа</span><span> {{ cartTotalPrice }} ₽ </span>
          </div>
          <div class="cart-total__total-count">
            <span>Количество</span><span> {{ cartTotalCount }} шт </span>
          </div>
          <div class="cart-total__installation">
            <span>Установка</span><span v-if="getChecboxStatus"> да</span
            ><span v-else> нет</span>
          </div>
          <div class="cart-total__total-price">
            <span>Стоимость товаров</span><span> {{ cartTotalPrice }} ₽ </span>
          </div>
          <button class="cart-total__button" @click="sendOrder">
            Оформить заказ
          </button>
          <button class="cart-total__button" @click="sendOrder">
            Купить в 1 клик
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Cart",
  computed: mapGetters([
    "allcartItems",
    "cartTotalPrice",
    "cartTotalCount",
    "getChecboxStatus",
  ]),
  methods: {
    ...mapActions({
      fetchCartItems: "fetchCartItems",
      changeQuantity: "changeQuantity",
      deleteItem: "deleteItem",
      сlearCart: "сlearCart",
      changeCheckboxStatus: "changeCheckboxStatus",
      sendOrder: "sendOrder",
    }),
  },

  mounted() {
    this.fetchCartItems();
  },
};
</script>