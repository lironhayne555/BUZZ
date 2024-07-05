<template>
  <div>
    <Post
      user="liron hayne"
      text="This is a sample post"
      :date="new Date()"
      image="https://www.google.com/imgres?q=mhpur&imgurl=https%3A%2F%2Fwww.ynet.co.il%2FPicServer5%2F2018%2F01%2F02%2F8255043%2FImage2.jpg&imgrefurl=https%3A%2F%2Fwww.ynet.co.il%2Farticles%2F0%2C7340%2CL-5065145%2C00.html&docid=CxearbBDTX1thM&tbnid=jmCLkn7Q1_it2M&vet=12ahUKEwjy_YqY_Y-HAxWGRKQEHaJcAmMQM3oECBwQAA..i&w=980&h=728&hcb=2&ved=2ahUKEwjy_YqY_Y-HAxWGRKQEHaJcAmMQM3oECBwQAA"
      :likes="['User1', 'User2']"
      :comments="['Nice post!', 'Interesting...']"
    />
  </div>
</template>

<script></script>
