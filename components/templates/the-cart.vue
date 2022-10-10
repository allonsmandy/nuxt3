<template>
  <aside class="cart">
    <div class="cart__title">
      <strong>Carrinho</strong>
      <span>({{ cart.list.length }} itens)</span>
    </div>

    <div class="cart__empty" v-if="!cart.list.length">
      <img src="~/assets/images/cart-icon.svg" alt="" />
      <p>Até o momento, o seu carrinho está vazio</p>
    </div>

    <template v-else>
      <template v-for="(item, index) in cart.listGames" :key="index">
        <molecules-cart-game :game="item" />
      </template>

      <atoms-cart-result title="subtotal" :description="formatNumber(cart.subtotal)" />
      <atoms-cart-result title="frete" :description="formatNumber(cart.totalShipping)" />
      <atoms-cart-result
        title="total"
        size="medium"
        :description="formatNumber(cart.total)"
        :medium="true"
      />

      <atoms-button> Finalizar Compra </atoms-button>
    </template>
  </aside>
</template>

<script setup>
import { useCart } from "../../store/cart";
const cart = useCart();

const formatNumber = (price) => {
  return Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(price);
};
</script>

<style lang="scss" scoped>
.cart {
  border: 1px solid var(--nevada--1);
  width: 260px;
  padding: 15px;
  margin-left: 30px;

  &__title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    strong {
      font-size: $size-18;
    }

    span {
      font-size: $size-14;
      color: var(--nevada--2);
    }
  }

  &__empty {
    text-align: center;
    padding: 40px;

    p {
      color: var(--nevada--2);
      font-size: $size-14;
      margin-top: 18px;
    }
  }
}
</style>
