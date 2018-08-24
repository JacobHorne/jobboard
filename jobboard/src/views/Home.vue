<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  <div>
   <div class="site-wrapper">  
    <div class="header">
      <div class="columns">
        <div class="column col-2">
          <img class="hide-xl show-xs" alt="Vue logo" src="../assets/jpmobilelogo.jpg" style="width:80px">
          <img class="hide-xs" alt="Vue logo" src="../assets/jplogo.jpg">
        </div>
        <div class="column col-10">
          <div class="form-group">
            <input class="form-input" type="text" id="input-example-1" placeholder="Name">
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="columns">
        <div class="column col-2 hide-sm hide-md hide-lg hide-xl">
          <div class="sidebar">
            <div class="location">
              <h4>Location</h4>
              <ul id="example-1">
                <li v-for="city in cities" :key="city">
                  <a href="">{{city}}</a>
                </li>
              </ul>
            </div>

            <div class="jobType">
              <h4>Job Type</h4>
              <span class="elipse red"></span><a href="">Full Time</a>
              <span class="elipse blue"></span><a href="">Part Time</a>
              <span class="elipse lightblue"></span><a href="">Temporary</a>
              <span class="elipse black"></span><a href="">Contact</a>
            </div>

            <div class="categories">
              <h4>Categories</h4>
              <a href="" @click="alert();">Warehouse (212)</a>
              <a href="" @click="alert();">Packer (54)</a>
              <a href="" @click="alert();">Medical (100)</a>
              <a href="" @click="alert();">Forklift (98)</a>
            </div>

             <div class="educationLevel">
              <h4>Education</h4>
              <a href="" @click="alert();">GED</a>
              <a href="" @click="alert();">High School</a>
              <a href="" @click="alert();">Technical School</a>
              <a href="" @click="alert();">Some College</a>
            </div>
          </div>
        </div>
      
        <div class="column col-sm-12 job-section">
          <div v-for="(job, index) in jobs"  :key="job">
            <a href="" class="job" :class="{ 'feature-job': index <= 1 }">
            <div class="columns">
              <div class="column col-9">
                <h4 id="job-title">{{job.jobTitle}}</h4>
              </div>
              <div class="columb col-3">
                <div class="tag red" :class="{ 'tag-random': index % 2 }">Full Time</div>
              </div>
            </div>
            <h5>{{job.jobCompany}}, {{job.jobLocation}}</h5>
            <p>{{job.jobDescription}}</p>
            <span>Posted June 8th</span>
            </a>
          </div>
        </div>

        <div class="column col-xl-4 hide-xs hide-md">
          <div class="ad-sidebar">
             <img alt="Advertisement logo" src="../assets/sampleAd.jpg">
          </div>
        </div>

        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss">

  $red:#E03956;
  $blue:#206084;
  $lightblue:#53AAF3;
  $black:#686868;

  .red{
     background:$red;
  }
   .blue{
     background:$blue;
  }
   .lightblue{
     background:$lightblue; 
  }
   .black{
     background:$black;
  }
  .site-wrapper{
    width:100%;
    margin:0 auto 0 auto;
    max-width:1200px;
  }
  .header{
    position:fixed;
    left:0;
    right:0;
    background:white;
    z-index:10;
    padding:0.5em;
    margin-bottom:2em;
    margin:0 auto;
    max-width:1200px;
    input{
      padding:1.3em;
    }
  }
  .job-section{
    margin-top:4em;
    .job{
      width:98%;
      margin:0px auto 10px auto;
      background:whitesmoke;
      border:1px solid rgb(240, 233, 233);
      padding:0.8em 1em 0.8em 1em;
      border-radius:2px;
      display:block;
      list-style: none;
      cursor: pointer;
      
      &:hover{
        background-color:rgb(190, 220, 229);
        text-decoration:none;
      }
      
      a{
        list-style: none;
      }
      #job-title{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .tag{
        width:110px;
        padding:6px;
        border-radius: 2px;
        color:white;
        text-align: center;
        font-weight: 600;
        float:right;
      }
      h4{
        font-size:1.2em;
        color:black;
      }
      h5{
        font-size:1em;
        color:black;
        opacity:0.7;
      }
      p{
        font-size:0.9em;
        color:black;
        opacity:0.6;
        margin:0;
      }
      span{
        font-size:0.8em;
        text-align:right;
        color:$black;
        opacity:0.6;
      }
    }
  }
  
  .elipse{
      width:12px;
      height:12px;
      border-radius:50px;
      margin:0px 5px 0 0;
      float:left;
      
  }
  .sidebar{
    border:grey;
    height: 900px;
    padding:1em 1em;
    position:fixed;
    margin-top:4em;
    a{
        color:$black !important;
        margin:0;
        display: block;
    &a:visited{
      color:$black;
    }
    }
    .location{ 
      ul,li{
        list-style:none;
        margin:0;
      }
    }
    div{
      padding:0 0 1em 0;
      margin-bottom:1em;
      border-bottom:1px solid lightgrey;
    }
    h4{
      margin:0 0 6px 0;
      font-size:1.3em;
      font-weight: 600;
    }
    p{
      margin:0;
      font-size:0.9em; 
    }
    // :last-child{
      
    // }
  }
  .ad-sidebar{
    padding:3em;
    margin:0em 0 10px 0; 
    position:fixed;
    text-align:center;
  }
  .feature-job{
    background:rgb(200, 251, 255) !important;
  }
  .tag-random{
    background:$blue;
  }
</style>


<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data(){
    return{
       cities:['Columbia,SC','Greenville,SC','Charleston,SC'],
       jobs: [
        { jobTitle: 'Construction Worker', jobLocation: 'Columbia, SC', jobCompany: 'ATL Technologies', jobDescription: 'This is a great Jobs Description,  ' },
        { jobTitle: 'Construction Worker', jobLocation: 'Columbia, SC', jobCompany: 'ATL Technologies', jobDescription: 'This is a great Jobs Description,  ' },
        { jobTitle: 'Construction Worker', jobLocation: 'Columbia, SC', jobCompany: 'ATL Technologies', jobDescription: 'This is a great Jobs Description,  ' },
        { jobTitle: 'Construction Worker', jobLocation: 'Columbia, SC', jobCompany: 'ATL Technologies', jobDescription: 'This is a great Jobs Description,  ' },
        { jobTitle: 'Construction Worker', jobLocation: 'Columbia, SC', jobCompany: 'ATL Technologies', jobDescription: 'This is a great Jobs Description,  ' },
        { jobTitle: 'Construction Worker', jobLocation: 'Columbia, SC', jobCompany: 'ATL Technologies', jobDescription: 'This is a great Jobs Description,  ' },
        { jobTitle: 'Construction Worker', jobLocation: 'Columbia, SC', jobCompany: 'ATL Technologies', jobDescription: 'This is a great Jobs Description,  ' },
        { jobTitle: 'Construction Worker', jobLocation: 'Columbia, SC', jobCompany: 'ATL Technologies', jobDescription: 'This is a great Jobs Description,  ' },
        { jobTitle: 'Construction Worker', jobLocation: 'Columbia, SC', jobCompany: 'ATL Technologies', jobDescription: 'This is a great Jobs Description,  ' },
        { jobTitle: 'Construction Worker', jobLocation: 'Columbia, SC', jobCompany: 'ATL Technologies', jobDescription: 'This is a great Jobs Description,  ' },
      ],
    }
  },
  methods:{
    truncate(){
      const basicTruncate = (str, strLgth = 3) => {
        const truncStr = str.substring(0, strLgth);
        return str.length > strLgth ? `${truncStr}...` : str;
      };
      const example = document.getElementById('job-title')
      const truncText = basicTruncate(example.textContent);
      example.textContent = truncText;
    }
  }

}
</script>
