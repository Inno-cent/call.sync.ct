<template>
  <div
    class="relative flex min-h-screen overflow-hidden bg-gradient-to-br from-[#6C63FF] via-[#1A73E8] to-[#00D4FF]"
    ref="signupContainer"
  >
    <!-- Animated Background Blurs -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute w-96 h-96 bg-white/10 blur-3xl rounded-full top-16 left-32 animate-pulse"></div>
      <div class="absolute w-80 h-80 bg-[#00D4FF]/10 blur-3xl rounded-full bottom-20 right-24 animate-ping"></div>
    </div>

    <!-- Left: Signup Form -->
    <div class="flex w-full lg:w-1/2 justify-center items-center z-20 px-6">
      <div
        class="w-full max-w-md p-10 backdrop-blur-2xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl"
        ref="formCard"
      >
        <h2 class="text-3xl font-semibold text-center text-white mb-8">Create Account</h2>

        <form @submit.prevent="signupUser" class="space-y-6" ref="form">
          <!-- Name -->
          <div>
            <label class="block text-white/80 mb-2">Full Name</label>
            <div class="relative">
              <input
                type="text"
                v-model="name"
                class="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-[#00D4FF] outline-none"
                placeholder="Enter your name"
              />
              <span class="absolute right-3 top-3 text-white/50">
                <i class="fa-regular fa-user"></i>
              </span>
            </div>
          </div>

          <!-- Email -->
          <div>
            <label class="block text-white/80 mb-2">Email Address</label>
            <div class="relative">
              <input
                type="email"
                v-model="email"
                class="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-[#00D4FF] outline-none"
                placeholder="Enter your email"
              />
              <span class="absolute right-3 top-3 text-white/50">
                <i class="fa-regular fa-envelope"></i>
              </span>
            </div>
          </div>

          <!-- Password -->
          <div>
            <label class="block text-white/80 mb-2">Password</label>
            <div class="relative">
              <input
                type="password"
                v-model="password"
                class="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-[#00D4FF] outline-none"
                placeholder="Create password"
              />
              <span class="absolute right-3 top-3 text-white/50">
                <i class="fa-solid fa-lock"></i>
              </span>
            </div>
          </div>

          <!-- Confirm Password -->
          <div>
            <label class="block text-white/80 mb-2">Confirm Password</label>
            <div class="relative">
              <input
                type="password"
                v-model="confirmPassword"
                class="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-[#00D4FF] outline-none"
                placeholder="Confirm password"
              />
              <span class="absolute right-3 top-3 text-white/50">
                <i class="fa-solid fa-lock"></i>
              </span>
            </div>
          </div>

          <!-- Button -->
          <button
            type="submit"
            class="w-full py-3 rounded-full bg-gradient-to-r from-[#1A73E8] to-[#00D4FF] text-white font-medium hover:scale-105 transition-transform duration-200 shadow-lg"
          >
            Sign Up
          </button>
        </form>

        <!-- Login Redirect -->
        <p class="text-center text-white/70 mt-8">
          Already have an account?
          <router-link to="/login" class="text-[#00D4FF] font-medium hover:text-white">Login</router-link>
        </p>
      </div>
    </div>

    <!-- Right Illustration Section -->
    <div class="hidden lg:flex flex-col justify-center items-start w-1/2 px-20 text-white z-10">
      <h1 class="text-5xl font-bold mb-6 tracking-wide">Join CallSync</h1>
      <p class="text-xl font-light leading-relaxed max-w-md">
        Organize your calls, sync your timezones, and collaborate effortlessly.
      </p>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";

export default {
  name: "Signup",
  setup() {
    const signupContainer = ref(null);
    const formCard = ref(null);
    const form = ref(null);

    onMounted(() => {
      // Subtle background entrance animation
      gsap.from(signupContainer.value, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut",
      });

      // Animate form slide and input stagger
      gsap.from(formCard.value, {
        x: -80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(form.value.children, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        delay: 0.4,
        stagger: 0.15,
        ease: "power2.out",
      });
    });

    const name = ref("");
    const email = ref("");
    const password = ref("");
    const confirmPassword = ref("");

    const signupUser = () => {
      console.log("Signing up:", { name: name.value, email: email.value });
    };

    return { name, email, password, confirmPassword, signupUser, signupContainer, formCard, form };
  },
};
</script>

<style scoped lang="scss">
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css');

.animate-pulse {
  animation: pulse 6s infinite alternate;
}
.animate-ping {
  animation: ping 8s infinite alternate;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.6;
  }
  100% {
    transform: scale(1.3);
    opacity: 1;
  }
}

@keyframes ping {
  0% {
    transform: scale(0.8);
    opacity: 0.5;
  }
  100% {
    transform: scale(1.2);
    opacity: 0.9;
  }
}
</style>
