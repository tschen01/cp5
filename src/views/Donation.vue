<template>

<div id="donate">
  <h1 class = "center retroshadow"> 😍 Donations 😍</h1>

  <div class="container align3">
  <div class="row center align">
    <div class="col-7 center align">

    <div class="form-group align2">
      <label>Name </label>
      <input  v-model="donateName" class="form-control" placeholder="Enter Name">
      <br>
      <br>
    </div>
    <div class="form-group align2">
      <label>Amount </label>
      <input v-model="donateAmount" class="form-control"  placeholder="Amount">
    </div>
    <button @click="donated" width="200" height="200" class="btn btn-primary center align2" >  Donate! </button>
</div>
</div>
</div>

<p class="label align2">Donation Bar</p>
<div class="shell">
<div class="bar" :style="{ width: progress + '%' }">
    <p class = "center">${{ progress }}</p>
  </div>
</div>

<p v-if="donated1" class = "center">Thanks, {{donateName1}}, for donating ${{donateAmount1}}</p>

</div>

</template>

<script>

export default {
  name: 'donation',
  components: {

  },
  data() {
  return {
    donateName: '',
    donateAmount: '',
    donateName1: '',
    donateAmount1: '',
    donated1: false,
  progress: 0,
}
  },

  methods: {
    async donated() {
      try {
          this.donateName1 = this.donateName,
          this.donateAmount1 = this.donateAmount,
        //makeProgress();
        this.progress = parseInt(this.donateAmount) + parseInt(this.progress);
        this.donated1 = true;
        this.donateName = '';
        this.donateAmount = '';
      } catch (error) {
        console.log(error);
      }
    },
  },

}

</script>
<style scoped>
.bg-primary {
    background-color: #77b272 !important;
}
.navbar-brand{
  border: 10px solid black;
  border-radius: 5px 20px 5px;
  padding: 10px;
}
.navbar-dark .navbar-nav .nav-link:focus, .navbar-dark .navbar-nav .nav-link:hover {
  color: #333;
}

.navitem
.navbar-dark .navbar-nav .nav-link {
  color: #fff;
}

.center{
  text-align: center;
}
.portfolio {
  display: grid;
  grid-template: auto auto auto auto auto / 1fr 1fr 1fr;
  grid-column-gap: 50px;
  grid-row-gap: 30px;
}
.review{
  font-family: "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, "AppleGothic", sans-serif;
  font-size: 24px;
  padding-top: 20px;
  text-align: center;
  text-transform: uppercase;
  text-rendering: optimizeLegibility;
}
.retroshadow {
    color: #2c2c2c;
    letter-spacing: .05em;
    text-shadow:
      4px 4px 0px #d5d5d5,
      7px 7px 0px rgba(0, 0, 0, 0.2);
  }
  .p2{
    font-style: italic;
    text-decoration: underline;
  }
  h1{
    padding-top: 15px;
    font-family: inherit;
    font-size: 45px;
  }
  section {
   display: flex;
  }

  aside {
   flex: 1
  }

  article {
    margin-right: 200px;
    margin-left:200px;
   flex: 4
  }
  .p3{
    font-family: fantasy;
    font-size: 20px;
    font-weight: bold;
  }

  .btn-outline-success {
    color: rgba(255, 255, 255, 1);
    border-color: #1a7930;
}

.bottom {
  padding: 50px;
  text-align: center;
}
.row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: 300px;
}
.top{
  margin-top: 20px;
  margin-bottom: 40px;
  margin-left: 50px;
  margin-right: 50px;
}
.align2 {
margin-left:-300px;
}

.label {
  text-align: center;
  margin-top: 20px;
  font-weight: bold;
  font-size: 18px;
}
.bar {
  background: linear-gradient(to right, #B993D6, #8CA6DB);
  height: 20px;
  width: 15px;
  border-radius: 9px;
  span {
    float: right;
    padding: 4px 5px;
    color: #fff;
    font-size: 0.7em
  }
}

.align3 {
margin-right: -250px;
}
button {
  margin-top: 20px;
}

body {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  background: #fff;
  padding: 0px;
  margin: 0px;
}

.italic{
  font-weight: bold;
  font-family: cursive;
  font-style: italic;
}
/* Header */
.header {
  display: flex;
  padding: 20px 100px 0px 100px;
  background-color: #5BDEFF;
  color: #fff;
}

.title {
  margin-top: 10px;
}

.title h1, .title h2 {
  margin: 0px;
}

.title h1 {
  border-top: 1px solid #000;
}

/* Footer */
.footer {
  height: 50px;
  padding: 20px 100px 0px 100px;
}

.footer a {
  color: #000;
}

/* Content */
.content {
  padding: 20px 100px 0px 100px;
}

.image h2 {
  font-style: italic;
  font-size: 1em;
}

/* Admin */
.heading {
  display: flex;
  font-style: oblique;
  margin-bottom: 20px;
  margin-top: 20px;
}

.heading h2 {
  margin: 0px;
  margin-left: 10px;
}

.add, .edit {
  text-align: center;
  display: flex;
}

.circle {
  text-align: center;
}

/* Form */
input, textarea, select, button {
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
}

.form {
  margin-right: 50px;
}

/* Uploaded images */
.upload h2 {
  margin: 0px;
}
.align {

  margin-right: -200px;

}

.upload img {
  max-width: 300px;
}

/* Suggestions */
.suggestions {
  width: 200px;
  border: 1px solid #ccc;
}

.suggestion {
  min-height: 20px;
}

.suggestion:hover {
  background-color: #5BDEFF;
  color: #fff;
}

/* Masonry */
html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

.image-gallery {
  column-gap: 1.5em;
}

.image {
  margin: 0 0 1.5em;
  display: inline-block;
  margin-right: 30px;
  margin-right: 30px;
}

.image img {
  height: 300px;
  width: 300px;
}
textarea {
  width: 300px;
  height: 30px;
}

/* Masonry on large screens */
@media only screen and (min-width: 1024px) {
  .image-gallery {
    column-count: 4;
  }
}

/* Masonry on medium-sized screens */
@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .image-gallery {
    column-count: 3;
  }
}

/* Masonry on small screens */
@media only screen and (max-width: 767px) and (min-width: 540px) {
  .image-gallery {
    column-count: 2;
  }
}
</style>
