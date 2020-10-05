<template>
<div class="forgetPassword-page">
    <section class="main">
        <Navbar />
        <BaseTitle title="忘記密碼" class="base-title"></BaseTitle>
    </section>

</div>
</template>

<script>
import Navbar from "@/components/common/Navbar";
import BaseTitle from "@/components/common/BaseTitle";

export default {
    components: {
        // name: "ForgetPassword",
        Navbar,
        BaseTitle
    }

}
</script>

<style lang="scss" scoped>
.forgetPassword-page {
    position: relative;
}

.main {
    padding: 0 32px;
}

.base-title {
    margin-top: 31px;
    margin-bottom: 53px;
}
</style>
