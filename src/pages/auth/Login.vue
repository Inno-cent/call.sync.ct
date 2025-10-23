<template>
  <div class="relative flex min-h-screen overflow-hidden bg-gradient-to-br from-[#1A73E8] via-[#6C63FF] to-[#00D4FF]">
    <!-- Background Motion Layer -->
    <div class="absolute inset-0">
      <div class="absolute w-96 h-96 bg-white/10 blur-3xl rounded-full top-10 left-20 animate-pulse"></div>
      <div class="absolute w-80 h-80 bg-[#00D4FF]/10 blur-3xl rounded-full bottom-10 right-16 animate-ping"></div>
    </div>

    <!-- Left Branding Section -->
    <div class="hidden lg:flex flex-col justify-center items-start w-1/2 px-20 text-white z-10">
      <h1 class="text-5xl font-bold mb-6 tracking-wide">CallSync</h1>
      <p class="text-xl font-light leading-relaxed">
        Schedule smarter. <br />
        Connect seamlessly across time zones.
      </p>
    </div>

    <!-- Right Login Form -->
    <div class="flex w-full lg:w-1/2 justify-center items-center z-20 px-6">
      <div
        class="w-full max-w-md p-10 backdrop-blur-2xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl relative"
      >
        <h2 class="text-3xl font-semibold text-center text-white mb-8">Welcome Back</h2>

        <form @submit.prevent="loginUser" class="space-y-6">
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
                placeholder="Enter your password"
              />
              <span class="absolute right-3 top-3 text-white/50">
                <i class="fa-solid fa-lock"></i>
              </span>
            </div>
          </div>

          <!-- Remember + Forgot -->
          <div class="flex justify-between text-white/70 text-sm">
            <label class="flex items-center space-x-2">
              <input type="checkbox" class="accent-[#00D4FF]" />
              <span>Remember me</span>
            </label>
            <a href="#" class="hover:text-white">Forgot Password?</a>
          </div>

          <!-- Button -->
          <button
            type="submit"
            class="w-full py-3 rounded-full bg-gradient-to-r from-[#1A73E8] to-[#00D4FF] text-white font-medium hover:scale-105 transition-transform duration-200 shadow-lg"
          >
            Login
          </button>
        </form>

        <!-- Signup Redirect -->
        <p class="text-center text-white/70 mt-8">
          Don’t have an account?
          <router-link to="/signup" class="text-[#00D4FF] font-medium hover:text-white">Sign up</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    loginUser() {
      console.log('Logging in with', this.email, this.password)
    }
  }
}
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
