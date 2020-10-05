<template>
<div class="member-application">
    <Navbar></Navbar>
    <router-view />
</div>
</template>

<script>
import Navbar from "@/components/common/Navbar";
export default {
    name: "MemberApplication",
    components: {
        Navbar
        // PasswordInput
    }
};
</script>

<style lang="scss" scoped></style>
