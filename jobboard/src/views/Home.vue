<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->

  <!-- <div>
      <div style="width:60%;margin:0 auto;">
        <span class="elipse red"></span><span>Full Time</span>
        <span class="elipse blue"></span><span>Part Time</span>
        <span class="elipse black"></span><span>Temporary</span>
        <span class="elipse lightblue"></span><span>Contract</span>
      </div>
    </div> -->

  <div>
   
    <div class="">
        <img alt="Vue logo" src="../assets/jpmobilelogo.jpg" style="width:80px">
        <!-- <div class="form-group">
          <input class="form-input" type="text" id="input-example-1" placeholder="Name">
        </div> -->
    </div>


    <div class="container">
      <div class="columns">

        <div class="column col-xl-4 hide-sm hide-md hide-lg hide-xl">
          <div class="sidebar">
            <div>
              <h4>Location</h4>
              <p>Columbia, SC</p>
              <p>Charleston, SC</p>
              <p>Greenville, SC</p>
              <p>Myrtle Beach, SC</p>
            </div>

            <div>
              <h4>Job Type</h4>
              <span class="elipse red"></span><p>Full Time</p>
              <span class="elipse blue"></span><p>Part Time</p>
              <span class="elipse lightblue"></span><p>Temporary</p>
              <span class="elipse black"></span><p>Contact</p>
            </div>

            <div>
              <h4>Categories</h4>
              <p>Warehouse (212)</p>
              <p>Nursing (122)</p>
              <p>Trucking (92)</p>
              <p>Construction (55)</p>
              <p>Forklift (55)</p>
            </div>

             <div>
              <h4>Education</h4>
              <p>GED</p>
              <p>High School</p>
              <p>College/University</p>
            </div>
            
          </div>
        </div>

        <div class="column col-sm-12">

          <a class="job" @click="alert('Take User To Job')">
            <div class="columns">
              <div class="column col-9">
                <h4 id="job-title">Retail Sales Part Time</h4>
              </div>
              <div class="columb col-3">
                <div class="tag red">Full Time</div>
              </div>
            </div>
            <h5>FDJ.com - Columbia, SC</h5>
            <p>As an Apparel and Accessories team member, your eye for trend will help our guests discover new looks and bring...</p>
          </a>

          <div class="job" @click="alert('Take User To Job')">
            <div class="columns">
              <div class="column col-9">
                <h4 id="job-title">Retail Sales Part Time</h4>
              </div>
              <div class="columb col-3">
                <div class="tag blue">Full Time</div>
              </div>
            </div>
            <h5>FDJ.com - Columbia, SC</h5>
            <p>As an Apparel and Accessories team member, your eye for trend will help our guests discover new looks and bring...</p>
          </div>

          <div class="job" @click="alert('Take User To Job')">
            <div class="columns">
              <div class="column col-9">
                <h4 id="job-title">Retail Sales Part Time</h4>
              </div>
              <div class="columb col-3">
                <div class="tag black">Full Time</div>
              </div>
            </div>
            <h5>FDJ.com - Columbia, SC</h5>
            <p>As an Apparel and Accessories team member, your eye for trend will help our guests discover new looks and bring...</p>
          </div>

          <div class="job" @click="alert('Take User To Job')">
            <div class="columns">
              <div class="column col-9">
                <h4 id="job-title">Retail Sales Part Time</h4>
              </div>
              <div class="columb col-3">
                <div class="tag blue">Full Time</div>
              </div>
            </div>
            <h5>FDJ.com - Columbia, SC</h5>
            <p>As an Apparel and Accessories team member, your eye for trend will help our guests discover new looks and bring...</p>
          </div>

          <div class="job" @click="alert('Take User To Job')">
            <div class="columns">
              <div class="column col-9">
                <h4 id="job-title">Part Time Event Specialist</h4>
              </div>
              <div class="columb col-3">
                <div class="tag red">Full Time</div>
              </div>
            </div>
            <h5>AdvantageSolutions - Columbia, SC</h5>
            <p>Are you outgoing, friendly and enjoy meeting new people? Join our winning team as a retail demonstrator</p>
          </div>

          <div class="job" @click="alert('Take User To Job')">
            <div class="tag red">Full Time</div>
            <h4 id="job-title">Part Time Event Specialist</h4>
            <h5>AdvantageSolutions - Columbia, SC</h5>
            <p>Are you outgoing, friendly and enjoy meeting new people? Join our winning team as a retail demonstrator</p>
          </div>  
          <div class="job" @click="alert('Take User To Job')">
            <div class="tag blue">Part Time</div>
            <h4 id="job-title">Work At Home (Up To $37, Hourly, Part Time, Full Time)</h4>
            <h5>Classified - Elgin, SC</h5>
            <p>Work at home or anywhere you can connect to the internet. Set your own hours. Unlimited earning pote</p>
          </div>  
          <div class="job" @click="alert('Take User To Job')">
            <div class="tag lightblue">Contract</div>
            <h4>PART TIME ADMINISTRATIVE ASSISTANT</h4>
            <h5>Express Employment Professionals - Columbia, SC</h5>
            <p>Express Employment Professionals is currently looking for Part-Time Administrative Assistants.</p>
          </div>  
          <div class="job" @click="alert('Take User To Job')">
            <div class="tag black">Full Time</div>
            <h4>$22Hr Part Time (Walmart)</h4>
            <h5>Walmart - Columbia, SC</h5>
            <p>Part Time Workers are needed at Walmart. No experience needed and competive pay and benefits. Apply to local Part Time Walmart Jobs by clicking here.</p>
          </div>
          <div class="job" @click="alert('Take User To Job')">
            <div class="tag blue">Full Time</div>
            <h4>Part-Time Pediatrician</h4>
            <h5>Eau Claire Cooperative Health Center Inc - Columbia, SC</h5>
            <p>Title:Part-Time\/Flexible Pediatrician Company Overview: Eau Claire Cooperative Health Centers, Inc. (ECCHC) has been serving the midlands area since 1981. We are South Carolina s largest and most cost</p>
          </div>
          <div class="job" @click="alert('Take User To Job')">
            <div class="tag red">Full Time</div>
            <h4>Retail Sales Part Time</h4>
            <h5>FDJ.com - Columbia, SC</h5>
            <p>As an Apparel and Accessories team member, your eye for trend will help our guests discover new looks and bring their definition of style to life with confidence. We're looking for team members</p>
          </div>      
        </div>

        <div class="column col-xl-4 hide-xs hide-md">
          <div class="">
            <div class="ad">
              <p>Ad 1</p>
            </div>
            <div class="ad">
              <p>Ad 2</p>
            </div>
             <div class="ad">
              <p>Ad 3</p>
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
  .job{
    width:98%;
    margin:0px auto 10px auto;
    background:#F8F8F8;
    padding:0.8em 1em 0em 1em;
    border:1px solid lightgrey;
    border-radius:2px;
    display:block;
    list-style: none;
    cursor: pointer;
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
      // position: absolute;
      // right:10px;
      // top:7px;
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
      margin:0.5 0em;
      color:black;
      opacity:0.6;
    }
    span{
      position:absolute;
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
    background:whitesmoke;
    border:grey;
    height: 900px;
    padding:1em 3em;
    div{
      padding:0 0 1em 0;
      margin-bottom:1em;
      border-bottom:1px solid lightgrey;
    }
    h4{
      margin:0 0 6px 0;
      font-size:1.2em;
    }
    p{
      margin:0;
      font-size:0.9em;
      
    }
    // :last-child{
      
    // }
  }
  .ad{
    background:whitesmoke;
    border:1px solid lightgrey;
    padding:3em;
    margin:0em 0 10px 0; 
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
  data:{
    leadFiveJson: [
  {
    "response": {
      "query": "part-time",
      "location": "29223",
      "highlight": "off",
      "totalresults": "159",
      "start": "0",
      "end": "8",
      "radius": "25",
      "pageNumber": "0",
      "results": [
        {
          "jobtitle": "Retail Sales Part Time",
          "zip": "0",
          "company": "FDJ.com",
          "city": "Columbia",
          "state": "SC",
          "country": "US",
          "date": "2018-08-22",
          "url": "https://api.l5srv.net/job_search/api/web/get_job.srv?token=FHpSXzJLddOVDRhSigPvWwuJCg2Ax2RQNLFTpZeg57AL6ajiQT7iBsXcg7PULBCXlaU%2BFYbujvTFqW4Er2igWPI2Q3O5%2Bf6yBvVdBNq4f%2BykpWJuSKCX6iDC3X9%2FrB2SLKIIsZ1akfpsfxMwzUdGV9R9zDhnADng1Ll2AgBbA4RVfTHkMkIBkeW%2BHVa%2FMeWZ2KG8i1%2FWdTZe6z0lbkp8WSw4m0Tg3KBhup%2FUa20tGNAoo7qcq6bts4PCM%2Flj%2ByXDV7mmH3L8Jy3p6PvvNRYWCcLwzNj7qD%2BpK9vibNo6Oe7GjFpCCwE6Ep7W7oDGSWVS6I%2Bv0Pf2ex0%3D",
          "snippet": " As an Apparel and Accessories team member, your eye for trend will help our guests discover new looks and bring their definition of style to life with confidence. We're looking for team members who l",
          "onmousedown": "l5_trk(this)",
          "logo": "http://api.l5srv.net/js/company_logos/fa/4d/07/fa4d078331b71ff9e282ea3af1364784/20180105151005.png"
        },
        {
          "jobtitle": "Part Time Event Specialist .",
          "zip": "29223",
          "company": "AdvantageSolutions",
          "city": "Columbia",
          "state": "SC",
          "country": "US",
          "date": "2018-07-11",
          "url": "https://api.l5srv.net/job_search/api/web/get_job.srv?token=FHpSXzJLddOVDRhSigPvWwuJCg2Ax2RQNLFTpZeg57AL6ajiQT7iBsXcg7PULBCXlaU%2BFYbujvTFqW4Er2igWPI2Q3O5%2Bf6yBvVdBNq4f%2Bxe1Il4YFdQo21ZK8%2F5XdIZLKIIsZ1akfpsfxMwzUdGV9R9zDhnADng1Ll2AgBbA4RVfTHkMkIBkeW%2BHVa%2FMeWZkkg2%2FdLatr9e6z0lbkp8WSw4m0Tg3KBhup%2FUa20tGNAoo7qcq6btsykKLdg6VlrcV7mmH3L8Jy3p6PvvNRYWCcLwzNj7qD%2BpiFq3B7lycgl1jh6GQ2dpdBFM6%2BzQH%2FHjv1oqdsV8vO6GZ8UGwCZN0A%3D%3D",
          "snippet": "Advantage Solutions - JobID: 178734 [Retail / Product Demonstrator / Customer Service / Sales] Are you outgoing, friendly and enjoy meeting new people? Join our winning team as a retail demonstrator p",
          "onmousedown": "l5_trk(this)",
          "logo": "http://api.l5srv.net/js/company_logos/company_icon.png"
        },
        {
          "jobtitle": "Work At Home (Up To $37, Hourly, Part Time, Full Time)",
          "zip": "29045",
          "company": "Classified",
          "city": "Elgin",
          "state": "SC",
          "country": "US",
          "date": "2018-07-22",
          "url": "https://api.l5srv.net/job_search/api/web/get_job.srv?token=FHpSXzJLddOVDRhSigPvWwuJCg2Ax2RQNLFTpZeg57AL6ajiQT7iBsXcg7PULBCXlaU%2BFYbujvTFqW4Er2igWPI2Q3O5%2Bf6yBvVdBNq4f%2BwQSd4K8znvOMcmbZNZfGAAk%2BeyRZQKKHA3wqXqoWgkMbDu9J5dZsGeM%2Fg5D1T2lHrD66nqTK%2BMIremBaHvNoAp%2F%2BSKmNXHjBNQGQy6p1to3KSXZU2vWJn2raSVlh6wuGatEeeGkSgdExw2yttbX89caDwh73nU%2FJXWVmcGSv7u1kdbmBmEVAEXDBrlL0NFaTNc0YsT2HYg6BpargOnYXWTGlM8ZPZokxU%3D",
          "snippet": "Work at home or anywhere you can connect to the internet. Set your own hours. Unlimited earning pote",
          "onmousedown": "l5_trk(this)",
          "logo": "http://api.l5srv.net/js/company_logos/5f/e9/92/5fe9924381b91751eb45e8f01fdc38ea/responsivemedianyc.png"
        },
        {
          "jobtitle": "Walmart. (Hiring Immediately)",
          "zip": "",
          "company": "Walmart.MyJobResource.com",
          "city": "Columbia",
          "state": "SC",
          "country": "US",
          "date": "2018-08-22",
          "url": "https://l5srv.net/AdServer/serverShow.ads?P=Koj9d%2Fc3FPQ1qi7o7KqKgX9dH9PlEgpskYwEJHEc1Y0fe0HICnYgdOD0IYX93Stv2mJysv1r6%2FA2Xu6gR9f4WFtQq654V5ijz%2FNEMPzk8%2Bv1MX17OOJFNyokpJkMyifGFriUsGu1vh0fPR2ShhhKdAFPgZr4%2Bwc9UGfaR6C1LquGR6le1fJNTQeZXUB8SjP3wYtwl2pV0nc4cGfYYBfNRAksEH9w8efl0XUJCLLinQH6UWiUIBYO4K%2FcJXpnKjzf8OEKcamunFWxRtX8h6lcwFJqWXw6IJKxOn8%2FX1tTWnQX4tLBupoAs8kKdeIQ2RCs",
          "snippet": "(Hiring Immediately)!!! Search Part/Full-Time Walmart Jobs In Your Area.",
          "onmousedown": "l5_trk(this)",
          "logo": "http://api.l5srv.net/js/company_logos/97/e2/a0/97e2a0755662a883eefb463400b998ad/mjr.png"
        },
        {
          "jobtitle": "$22/Hr Part Time (Walmart)",
          "zip": "0",
          "company": "walmart",
          "city": "Columbia",
          "state": "SC",
          "country": "US",
          "date": "2018-08-03",
          "url": "https://api.l5srv.net/job_search/api/web/get_job.srv?token=FHpSXzJLddOVDRhSigPvWwuJCg2Ax2RQNLFTpZeg57AL6ajiQT7iBsXcg7PULBCXlaU%2BFYbujvTFqW4Er2igWPI2Q3O5%2Bf6yBvVdBNq4f%2Bw5N5JxnMI1YgVEULhvUsGfk%2BeyRZQKKHA3wqXqoWgkMbDu9J5dZsGeM%2Fg5D1T2lHrD66nqTK%2BMIremBaHvNoAp5L7IDuM7FeFQGQy6p1to3KSXZU2vWJn2raSVlh6wuGatEeeGkSgdE61lQzN3G29oaDwh73nU%2FJXWVmcGSv7u1vyhyeGzTYs71aog%2BbsYVvtc0YsT2HYg6Pe5gJmdju1zw4CJqS4exDs%3D",
          "snippet": "Part Time Workers are needed at Walmart. No experience needed and competive pay and benefits. Apply to local Part Time Walmart Jobs by clicking here.",
          "onmousedown": "l5_trk(this)",
          "logo": "http://api.l5srv.net/js/company_logos/company_icon.png"
        },
        {
          "jobtitle": " $18-$36/Hr Coca Cola (Hiring Now)",
          "zip": "",
          "company": "Rocketjobs.net/CocaCola",
          "city": "Columbia",
          "state": "SC",
          "country": "US",
          "date": "2018-08-22",
          "url": "https://l5srv.net/AdServer/serverShow.ads?P=Koj9d%2Fc3FPQ1qi7o7KqKgX9dH9PlEgpskYwEJHEc1Y0fe0HICnYgdOD0IYX93Stv2mJysv1r6%2FA2Xu6gR9f4WFtQq654V5ijz%2FNEMPzk8%2Bvgcm4qi%2Fxk2iokpJkMyifGFriUsGu1vh2lOw6ETWwb0gFPgZr4%2Bwc9%2FhNid8LeII7Z8hK60eK0xgeZXUB8SjP3wYtwl2pV0nc4cGfYYBfNRAksEH9w8efl0XUJCLLinQH6UWiUIBYO4K%2FcJXpnKjzf8OEKcamunFWxRtX8h6lcwFJqWXw6IJKxOn8%2FX1tTWnQX4tLBupoAs8kKdeIQ2RCs",
          "snippet": "Coca Cola is Hiring All Positions Today. No Experience Needed. $18-$36/Hour . Ap",
          "onmousedown": "l5_trk(this)",
          "logo": "http://api.l5srv.net/js/company_logos/4d/19/ad/4d19adfc7adfacf703c88489a21e48c5/20180131133025.png"
        },
        {
          "jobtitle": "PART TIME ADMINISTRATIVE ASSISTANT",
          "zip": "29223",
          "company": "Express Employment Professionals",
          "city": "Columbia",
          "state": "SC",
          "country": "US",
          "date": "2018-08-03",
          "url": "https://api.l5srv.net/job_search/api/web/get_job.srv?token=PC4q45Qww1wFeuAJMB0SOupg8mDHvoK7TuMSNFxoBuIOC2pJ3ytvwiJswwZ9CpUMlM4aE%2BXu%2BADkivvY5Wuxy2E49v%2FbkuoPVOImEklS0IIzMghXw0xXKLrMsRwNsexKfI8aj9E7DysJb%2BEXluqDnZBPI%2FQLZ4EoHK1io6sTz3WwRILm2GPXSx0I8DgyN3SJU9aeYOauGyxy7KKUV6mpYEoPBj%2BWve5O1mXf%2F6W01ZDzc1kE4qVf7SB45cr%2ByyM4g%2FWvQiAP%2B5x%2B9nz%2FanQlnkF%2BQEdEkB%2FxrI%2BXidNS4ad49ITSvh65ri%2BadKMzhPPoqSiuvOt4TdP5TY4vSWNe9rzAsYb6EAAdlbIcBjnemRenFQ0yC3op%2BSCt3rMNmHwGMkpYdfxD0O0%3D",
          "snippet": "Express Employment Professionals is currently looking for Part-Time Administrative Assistants.\n\n",
          "onmousedown": "l5_trk(this)",
          "logo": "http://api.l5srv.net/js/company_logos/63/80/d8/6380d8daf1269e7101b3b25febedacfc/wwwexpressproscom.png"
        },
        {
          "jobtitle": "Part-Time Pediatrician",
          "zip": "29228",
          "company": "Eau Claire Cooperative Health Center Inc",
          "city": "Columbia",
          "state": "SC",
          "country": "US",
          "date": "2018-07-19",
          "url": "https://api.l5srv.net/job_search/api/web/get_job.srv?token=PC4q45Qww1wFeuAJMB0SOupg8mDHvoK7TuMSNFxoBuIOC2pJ3ytvwiJswwZ9CpUMlM4aE%2BXu%2BADkivvY5Wuxy7d6JTEhRoPwhfi3ZEP6wQt3BO0uyV%2B5sQM7M9fFuWKUNl0nyPHykgp67JtdBdWSinnE74EYwtEA6MDPYiRjapphqSzsgCgt4cWpbgSvaKBY8jZDc7n5%2FrLkFXl%2FZhYucCyiCLGdWpH6bH8TMM1HRlfUfcw4ZwA54NS5dgIAWwOEVX0x5DJCAZHlvh1WvzHlmQ0F50WEZtnD9Xv0%2Bxc2GMg0UxUbFogmpw2Cyh7IzVFH5KHhw%2BfHpMuS1mWYd0KebOQpozQuiZRid%2FCl%2Fhy2tF6P9mwT74Wt9v0IH6jwXPMh8I2DlhOf%2BWM%3D",
          "snippet": "Title:Part-Time/Flexible Pediatrician Company Overview: Eau Claire Cooperative Health Centers, Inc. (ECCHC) has been serving the midlands area since 1981. We are South Carolina s largest and most cost",
          "onmousedown": "l5_trk(this)",
          "logo": "http://api.l5srv.net/js/company_logos/company_icon.png"
        }
      ]
      }
    }
    ]
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
