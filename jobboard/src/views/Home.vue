<template>
  <div>
   <div class="site-wrapper">  
    <div class="header">
      <div class="columns">
        <div class="column col-2 col-sm-3 col-md-4 col-lg-3 col-xl-3">
          <img class="img-fit-contain show-sm hide-md hide-xl" alt="" src="../assets/jpmobilelogo.jpg" style="max-width:80px;">
          <img class="img-fit-contain hide-xs hide-sm " alt="" src="../assets/jplogo.jpg">
        </div>
        <div class="column col-10 col-sm-9 col-md-8 col-lg-8 col-xl-9">
          <div class="input-group header-input ">
            <input type="text" class="form-input input-lg" onblur="this.placeholder = 'Enter Job Title, Keyword, or Company Name'" onfocus="this.placeholder = ''" placeholder="Enter Job Title, Keyword, or Company Name">
            <button class="btn btn-primary input-group-btn btn-lg input-button">Search Jobs</button>
             <!-- <span style="position:absolute;font-size:0.7em;opacity:0.9;bottom:-20px">Enter A Job Title, Keyword, or Company Name</span> -->
            <!-- <button btn btn-primary style="position:absolute;background-color:blue;color:white;font-weight:500;borer:none;border-radius:2px;"><i class="icon icon-location"></i> Location</button> -->
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="columns">
        <div class="column col-2 hide-sm hide-md hide-lg hide-xl">
          <div class="sidebar">
            <div class="location">
              <i class="icon icon-location"></i><h4>Location</h4>
              <ul id="example-1">
                <li v-for="city in cities" :key="city">
                  <a href="">{{city}}</a>
                </li>
                <li><a href="">Custom Location</a></li>
              </ul>
            </div>

            <div class="jobType">
              <i class="icon icon-menu"></i><h4>Job Type</h4>
              <a href="">Full Time</a>
              <a href="">Part Time</a>
              <a href="">Temporary</a>
              <a href="">Contact</a>
            </div>

            <div class="categories">
              <i class="icon icon-apps"></i><h4>Categories</h4>
              <a href="" @click="alert();">Warehouse (212)</a>
              <a href="" @click="alert();">Packer (54)</a>
              <a href="" @click="alert();">Medical (100)</a>
              <a href="" @click="alert();">Forklift (98)</a>
            </div>

             <div class="educationLevel">
              <i class="icon icon-edit"></i><h4>Education</h4>
              <a href="" @click="alert();">GED</a>
              <a href="" @click="alert();">High School</a>
              <a href="" @click="alert();">Technical School</a>
              <a href="" @click="alert();">Some College</a>
            </div>
          </div>
        </div>
      
        <div class="column col-sm-12 job-section">
          <div v-for="(job, index) in jobs"  :key="index">
            <a href="" class="job" :class="{ 'feature-job': index <= 1 }">
            <div class="columns">
              <div class="column col-9">
                <h4 id="job-title">{{job.jobTitle}}</h4>
              </div>
              <div class="columb col-3">
                <div class="tag red" :class="{ 'tag-random': index % 3 }">View Job</div>
              </div>
            </div>
            <h5 id="job-title">{{job.jobCompany}}</h5>
            <p>{{job.jobDescription}}</p>
            <span>Location: {{job.jobLocation}} - Date Posted: June 8th </span>
            </a>
          </div>
        </div>

        <div class="column col-xl-5 hide-xs hide-md">
          <div class="ad-sidebar">
             <img alt="Advertisement logo" src="../assets/sampleAd.jpg">
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
  $black:#323232;
  .btn{
    background:$black !important;
    font-weight:500;
    border:1px solid $black !important;
  }
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
    border-bottom:1px solid rgba(223, 218, 218, 0.8);
    .header-input{
      margin: 10px 0 0 0px;
      max-width:600px;
      position:relative;
    }
    .input-button:hover{
      opacity:0.8;
    }
    input::placeholder{
      font-size:0.8em;
      color:$black;
      opacity:0.8;
    }
    input:focus{
      border:2px solid $blue;
      color:$black;
    }
  }
  .job-section{
    margin-top:6em;
    .job{
      width:98%;
      margin:0px auto 12px auto;
      background:whitesmoke;
      // border:1px solid rgb(193, 186, 186);
      padding:0.5em 1em 0.5em 1em;
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
        width:80px;
        padding:6px;
        border-radius: 2px;
        color:white;
        text-align: center;
        font-weight: 600;
        float:right;
        font-size:0.9em;
      }
      h4{
        font-size:1.2em;
        color:black;
        text-decoration:underline;
        font-weight: 600;
      }
      h5{
        font-size:1em;
        color:black;
        opacity:0.8;
        margin:0;
        font-weight: 600;
      }
      p{
        font-size:0.9em;
        color:black;
        opacity:0.9;
        margin:0;
      }
      span{
        font-size:0.8em;
        text-align:right;
        color:$black;
        opacity:0.8;
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
    padding:1em 1em;
    position:fixed;
    margin-top:5em;
    a{
        color:$black !important;
        margin:0;
        font-size:0.95em;
        display:block;
        opacity:0.9;
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
      padding:0 0 1.5em 0;
      margin-bottom:1em;
      // border-bottom:1px solid lightgrey;
    }
    h4{
      margin:0 0 6px 0;
      font-size:1.3em;
      font-weight: 600;
      display:inline-block;
      color:$black;
      opacity:0.9;
    }
    p{
      margin:0;
      font-size:0.9em; 
    }
    i{
      font-size:1.2em;
      margin:0 8px 6px 0;
    }
  }
  .ad-sidebar{
    margin-top:6em;
    position:fixed;
    padding:0 1.5em;
  }
  .feature-job{
    background:#fff7c9 !important;
  }
  .tag-random{
    background:$blue;
  }
  @media only screen and (min-width: 600px) {}
  @media only screen and (min-width: 800px) {
    .job-section{
      .job{
        .tag{
          width:110px;
          font-size:1.1em;
        }
      }
    }
  }
  @media only screen and (min-width: 1000px) {
    .header{
      .header-input{
      margin:10px 2px;
      max-width:475px;
      border-radius:2px;
      }
    }
  }
  @media only screen and (min-width: 1200px) {}

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
        { jobTitle: 'Walmart. (Hiring Immediately)', jobLocation: 'Columbia, SC', jobCompany: 'Walmart.MyJobResource.com', jobDescription: '(Hiring Immediately)!!! Search Part/Full-Time Walmart Jobs In Your Area.' },
        { jobTitle: 'Part-Time Shuttle Bus Driver', jobLocation: 'Columbia, SC', jobCompany: 'Green Way Shuttles', jobDescription: 'Green Way Shuttles is a professional student transportation company that currently services over 50 separate properties at 23 universities across the United States.We are currently hiring Shuttle Bus' },
        { jobTitle: 'Part Time - Load Puller - Early Mornings', jobLocation: 'Columbia, SC', jobCompany: 'Lowes', jobDescription: 'Lowes - JobID: 1449105BR [Retail / Laborer] Support delivery activities including inspecting and preparing merchandise and loads for delivery, unloading, installing, and checking appliances and store ' },
        { jobTitle: 'Part-Time Sales Associate. Work From Home!', jobLocation: 'Columbia, SC', jobCompany: 'Helin Insurance Group', jobDescription: 'Job DescriptionWhat we are looking for:Licensed life insurance agents - or those willing to get a license - to join our team! Meet with clients that have requested our services - No Cold Calling.No ex' },
        { jobTitle: 'Retail Sales Part Time', jobLocation: 'Columbia, SC', jobCompany: 'FDJ.com', jobDescription: 'As an Apparel and Accessories team member, your eye for trend will help our guests discover new looks and bring their definition of style to life with confidence. Were looking for team members who' },
        { jobTitle: 'Hiring: Walmart Cashiers ($18-26/Hr)', jobLocation: 'Columbia, SC', jobCompany: 'Rocketjobs.net/Walmart-Full-Time', jobDescription: 'Walmart is Hiring Cashiers Today. No Experience Needed. Same Day Interviews!' },
        { jobTitle: 'Bookseller - Part-Time - Columbia - 29240', jobLocation: 'Columbia, SC', jobCompany: 'Barnes and Noble', jobDescription: '# Bookseller \\- Part\\-Time## **Location****SC \\- Columbia \\- Midtown at Forest Acres \\- 2868**## **Classification****Part\\-Time**## **Description****As a Bookseller, you sell all our products and' },
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
