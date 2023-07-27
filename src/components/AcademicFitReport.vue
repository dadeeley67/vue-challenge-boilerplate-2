<template>
  <div>
    <div class="info flex">
      <div>
        <img
          class="w-20 h-20 rounded-full"
          :src="athlete.profile_image"
          alt="Rounded avatar"
        />
      </div>
      <h2 class="text-primary font-bold text-xl">{{ athlete.name }}</h2>

      <ul class="columns-2">
        <li>
          <label class="font-bold">Sport:</label>
          {{ athlete.sport }}
        </li>

        <li>
          <label class="font-bold">Class:</label>
          {{ athlete.grad_year }}
        </li>

        <li>
          <label class="font-bold">Club:</label>
          {{ athlete.club.name }}
        </li>

        <li>
          <label class="font-bold">High School:</label>
          {{ athlete.high_school.name }}
        </li>

        <li>
          <label class="font-bold">GPA:</label>
          {{ athlete.gpa }}
        </li>

        <li>
          <label class="font-bold">Desired Major:</label>
          {{ athlete.major }}
        </li>
      </ul>
    </div>
    <div class="container">
      <!-- <table dir="ltr" cellspacing="0" cellpadding="0">
        <colgroup>
          <col width="110" />
          <col width="138" />
          <col width="85" />
          <col width="281" />
          <col width="148" />
          <col width="37" />
          <col width="37" />
          <col width="37" />
          <col width="37" />
          <col width="37" />
          <col width="120" />
          <col width="120" />
          <col width="120" />
        </colgroup>
        <tbody>
          <tr>
            <td
              colspan="2"
              rowspan="2"
              data-sheets-value='{"1":2,"2":"School Name"}'
            >
              <div>School Name</div>
            </td>
            <td
              colspan="1"
              rowspan="2"
              data-sheets-value='{"1":2,"2":"Athletic Div"}'
            >
              <div>Athletic Div</div>
            </td>
            <td
              colspan="1"
              rowspan="2"
              data-sheets-value='{"1":2,"2":"Conference"}'
            >
              <div>Conference</div>
            </td>
            <td
              colspan="1"
              rowspan="2"
              data-sheets-value='{"1":2,"2":"Ranking*\n(DI NCAA) \n(DII &amp; DIII Hero Sports)"}'
              data-sheets-textstyleruns='{"1":0}{"1":9,"2":{"4":8,"5":0}}'
            >
              <div>
                Ranking*<br />(DI NCAA) <br />(DII &amp; DIII Hero Sports)
              </div>
            </td>
            <td colspan="5" rowspan="1" data-sheets-value='{"1":2,"2":"GPA**"}'>
              GPA**
            </td>
            <td
              colspan="1"
              rowspan="2"
              data-sheets-value='{"1":2,"2":"SAT Reading***\n25%-75%"}'
            >
              <div>SAT Reading***<br />25%-75%</div>
            </td>
            <td
              colspan="1"
              rowspan="2"
              data-sheets-value='{"1":2,"2":"SAT Math***\n25%-75%"}'
            >
              <div>SAT Math***<br />25%-75%</div>
            </td>
            <td
              colspan="1"
              rowspan="2"
              data-sheets-value='{"1":2,"2":"ACT Composite***\n25%-75%"}'
            >
              <div>ACT Composite***<br />25%-75%</div>
            </td>
          </tr>
          <tr>
            <td data-sheets-value='{"1":2,"2":"Min"}'>Min</td>
            <td
              data-sheets-value='{"1":3,"3":0.25}'
              data-sheets-numberformat='{"1":3,"2":"0%","3":1}'
            >
              25%
            </td>
            <td
              data-sheets-value='{"1":3,"3":0.5}'
              data-sheets-numberformat='{"1":3,"2":"0%","3":1}'
            >
              50%
            </td>
            <td
              data-sheets-value='{"1":3,"3":0.75}'
              data-sheets-numberformat='{"1":3,"2":"0%","3":1}'
            >
              75%
            </td>
            <td data-sheets-value='{"1":2,"2":"Max"}'>Max</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td data-sheets-numberformat='{"1":3,"2":"0%","3":1}'>&nbsp;</td>
            <td data-sheets-numberformat='{"1":3,"2":"0%","3":1}'>&nbsp;</td>
            <td data-sheets-numberformat='{"1":3,"2":"0%","3":1}'>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td
              colspan="2"
              rowspan="1"
              data-sheets-value='{"1":2,"2":"California State University, Northridge"}'
            >
              California State University, Northridge
            </td>
            <td data-sheets-value='{"1":2,"2":"III"}'>III</td>
            <td data-sheets-value='{"1":2,"2":"Big West Conference"}'>
              Big West Conference
            </td>
            <td data-sheets-value='{"1":3,"3":151}'>151</td>
            <td
              data-sheets-value='{"1":3,"3":2.7}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              2.70
            </td>
            <td
              data-sheets-value='{"1":3,"3":3.275}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              3.28
            </td>
            <td
              data-sheets-value='{"1":3,"3":3.52}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              3.52
            </td>
            <td
              data-sheets-value='{"1":3,"3":3.8}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              3.80
            </td>
            <td
              data-sheets-value='{"1":3,"3":4}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              4.00
            </td>
            <td data-sheets-value='{"1":2,"2":"400-510"}'>400-510</td>
            <td data-sheets-value='{"1":2,"2":"400-530"}'>400-530</td>
            <td data-sheets-value='{"1":2,"2":"16-22"}'>16-22</td>
          </tr>
          <tr>
            <td
              colspan="2"
              rowspan="1"
              data-sheets-value='{"1":2,"2":"California State University, Bakersfield"}'
            >
              California State University, Bakersfield
            </td>
            <td data-sheets-value='{"1":2,"2":"I"}'>I</td>
            <td data-sheets-value='{"1":2,"2":"Western Athletic Conference"}'>
              Western Athletic Conference
            </td>
            <td data-sheets-value='{"1":3,"3":160}'>160</td>
            <td
              data-sheets-value='{"1":3,"3":2}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              2.00
            </td>
            <td
              data-sheets-value='{"1":3,"3":3.39}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              3.39
            </td>
            <td
              data-sheets-value='{"1":3,"3":3.6}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              3.60
            </td>
            <td
              data-sheets-value='{"1":3,"3":3.875}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              3.88
            </td>
            <td
              data-sheets-value='{"1":3,"3":4}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              4.00
            </td>
            <td data-sheets-value='{"1":2,"2":"390-500"}'>390-500</td>
            <td data-sheets-value='{"1":2,"2":"400-520"}'>400-520</td>
            <td data-sheets-value='{"1":2,"2":"15-22"}'>15-22</td>
          </tr>
          <tr>
            <td
              colspan="2"
              rowspan="1"
              data-sheets-value='{"1":2,"2":"Washington and Jefferson College"}'
            >
              Washington and Jefferson College
            </td>
            <td data-sheets-value='{"1":2,"2":"I"}'>I</td>
            <td
              data-sheets-value='{"1":2,"2":"President&apos;s Athletic Conference (PAC)"}'
            >
              President's Athletic Conference (PAC)
            </td>
            <td data-sheets-value='{"1":3,"3":202}'>202</td>
            <td
              data-sheets-value='{"1":3,"3":2.2}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              2.20
            </td>
            <td
              data-sheets-value='{"1":3,"3":3.3}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              3.30
            </td>
            <td
              data-sheets-value='{"1":3,"3":3.6}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              3.60
            </td>
            <td
              data-sheets-value='{"1":3,"3":3.9}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              3.90
            </td>
            <td
              data-sheets-value='{"1":3,"3":4}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              4.00
            </td>
            <td data-sheets-value='{"1":2,"2":"Not Reported"}'>Not Reported</td>
            <td data-sheets-value='{"1":2,"2":"Not Reported"}'>Not Reported</td>
            <td data-sheets-value='{"1":2,"2":"Not Reported"}'>Not Reported</td>
          </tr>
          <tr>
            <td
              colspan="2"
              rowspan="1"
              data-sheets-value='{"1":2,"2":"California State University, Sacramento"}'
            >
              California State University, Sacramento
            </td>
            <td data-sheets-value='{"1":2,"2":"I"}'>I</td>
            <td data-sheets-value='{"1":2,"2":"Big Sky Conference"}'>
              Big Sky Conference
            </td>
            <td data-sheets-value='{"1":3,"3":112}'>112</td>
            <td
              data-sheets-value='{"1":3,"3":2.7}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              2.70
            </td>
            <td
              data-sheets-value='{"1":3,"3":3.4875}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              3.49
            </td>
            <td
              data-sheets-value='{"1":3,"3":3.63}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              3.63
            </td>
            <td
              data-sheets-value='{"1":3,"3":3.92}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              3.92
            </td>
            <td
              data-sheets-value='{"1":3,"3":4}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              4.00
            </td>
            <td data-sheets-value='{"1":2,"2":"410-520"}'>410-520</td>
            <td data-sheets-value='{"1":2,"2":"430-540"}'>430-540</td>
            <td data-sheets-value='{"1":2,"2":"17-22"}'>17-22</td>
          </tr>
          <tr>
            <td
              colspan="2"
              rowspan="1"
              data-sheets-value='{"1":2,"2":"California State University, Fullerton"}'
            >
              California State University, Fullerton
            </td>
            <td data-sheets-value='{"1":2,"2":"I"}'>I</td>
            <td data-sheets-value='{"1":2,"2":"Big West Conference"}'>
              Big West Conference
            </td>
            <td data-sheets-value='{"1":3,"3":288}'>288</td>
            <td
              data-sheets-value='{"1":3,"3":2.6}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              2.60
            </td>
            <td
              data-sheets-value='{"1":3,"3":3.5}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              3.50
            </td>
            <td
              data-sheets-value='{"1":3,"3":3.71}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              3.71
            </td>
            <td
              data-sheets-value='{"1":3,"3":3.9425}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              3.94
            </td>
            <td
              data-sheets-value='{"1":3,"3":4}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              4.00
            </td>
            <td data-sheets-value='{"1":2,"2":"450-550"}'>450-550</td>
            <td data-sheets-value='{"1":2,"2":"470-580"}'>470-580</td>
            <td data-sheets-value='{"1":2,"2":"19-24"}'>19-24</td>
          </tr>
          <tr>
            <td
              colspan="2"
              rowspan="1"
              data-sheets-value='{"1":2,"2":"Boise State University"}'
            >
              Boise State University
            </td>
            <td data-sheets-value='{"1":2,"2":"I"}'>I</td>
            <td data-sheets-value='{"1":2,"2":"Mountain West Conference"}'>
              Mountain West Conference
            </td>
            <td data-sheets-value='{"1":3,"3":32}'>32</td>
            <td
              data-sheets-value='{"1":3,"3":2.75}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              2.75
            </td>
            <td
              data-sheets-value='{"1":3,"3":3.45}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              3.45
            </td>
            <td
              data-sheets-value='{"1":3,"3":3.74}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              3.74
            </td>
            <td
              data-sheets-value='{"1":3,"3":4}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              4.00
            </td>
            <td
              data-sheets-value='{"1":3,"3":4}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              4.00
            </td>
            <td data-sheets-value='{"1":2,"2":"460-570"}'>460-570</td>
            <td data-sheets-value='{"1":2,"2":"460-580"}'>460-580</td>
            <td data-sheets-value='{"1":2,"2":"20-26"}'>20-26</td>
          </tr>
          <tr>
            <td
              colspan="2"
              rowspan="1"
              data-sheets-value='{"1":2,"2":"Azusa Pacific University"}'
            >
              Azusa Pacific University
            </td>
            <td data-sheets-value='{"1":2,"2":"II"}'>II</td>
            <td data-sheets-value='{"1":2,"2":"Pacific West Conference"}'>
              Pacific West Conference
            </td>
            <td data-sheets-value='{"1":3,"3":88}'>88</td>
            <td
              data-sheets-value='{"1":3,"3":2.8}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              2.80
            </td>
            <td
              data-sheets-value='{"1":3,"3":3.5}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              3.50
            </td>
            <td
              data-sheets-value='{"1":3,"3":3.75}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              3.75
            </td>
            <td
              data-sheets-value='{"1":3,"3":3.9375}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              3.94
            </td>
            <td
              data-sheets-value='{"1":3,"3":4}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              4.00
            </td>
            <td data-sheets-value='{"1":2,"2":"490-600"}'>490-600</td>
            <td data-sheets-value='{"1":2,"2":"490-610"}'>490-610</td>
            <td data-sheets-value='{"1":2,"2":"21-27"}'>21-27</td>
          </tr>
          <tr>
            <td
              colspan="2"
              rowspan="1"
              data-sheets-value='{"1":2,"2":"California Lutheran University"}'
            >
              California Lutheran University
            </td>
            <td data-sheets-value='{"1":2,"2":"III"}'>III</td>
            <td
              data-sheets-value='{"1":2,"2":"Southern California Intercollegiate Athletic Con"}'
            >
              Southern California Intercollegiate Athletic Con
            </td>
            <td data-sheets-value='{"1":3,"3":2}'>2</td>
            <td
              data-sheets-value='{"1":3,"3":2.9}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              2.90
            </td>
            <td
              data-sheets-value='{"1":3,"3":3.625}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              3.63
            </td>
            <td
              data-sheets-value='{"1":3,"3":3.8}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              3.80
            </td>
            <td
              data-sheets-value='{"1":3,"3":4}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              4.00
            </td>
            <td
              data-sheets-value='{"1":3,"3":4}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              4.00
            </td>
            <td data-sheets-value='{"1":2,"2":"500-590"}'>500-590</td>
            <td data-sheets-value='{"1":2,"2":"510-613"}'>510-613</td>
            <td data-sheets-value='{"1":2,"2":"22-26"}'>22-26</td>
          </tr>
          <tr>
            <td
              colspan="2"
              rowspan="1"
              data-sheets-value='{"1":2,"2":"California State University, Fresno"}'
            >
              California State University, Fresno
            </td>
            <td data-sheets-value='{"1":2,"2":"I"}'>I</td>
            <td data-sheets-value='{"1":2,"2":"Mountain West Conference"}'>
              Mountain West Conference
            </td>
            <td data-sheets-value='{"1":3,"3":128}'>128</td>
            <td
              data-sheets-value='{"1":3,"3":2.46}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              2.46
            </td>
            <td
              data-sheets-value='{"1":3,"3":3.4}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              3.40
            </td>
            <td
              data-sheets-value='{"1":3,"3":3.8}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              3.80
            </td>
            <td
              data-sheets-value='{"1":3,"3":3.935}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              3.94
            </td>
            <td
              data-sheets-value='{"1":3,"3":4}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              4.00
            </td>
            <td data-sheets-value='{"1":2,"2":"400-510"}'>400-510</td>
            <td data-sheets-value='{"1":2,"2":"410-530"}'>410-530</td>
            <td data-sheets-value='{"1":2,"2":"16-22"}'>16-22</td>
          </tr>
          <tr>
            <td
              colspan="2"
              rowspan="1"
              data-sheets-value='{"1":2,"2":"UC Santa Barbara"}'
            >
              UC Santa Barbara
            </td>
            <td data-sheets-value='{"1":2,"2":"I"}'>I</td>
            <td data-sheets-value='{"1":2,"2":"Big West Conference"}'>
              Big West Conference
            </td>
            <td data-sheets-value='{"1":3,"3":71}'>71</td>
            <td
              data-sheets-value='{"1":3,"3":2.4}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              2.40
            </td>
            <td
              data-sheets-value='{"1":3,"3":3.5}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              3.50
            </td>
            <td
              data-sheets-value='{"1":3,"3":3.8}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              3.80
            </td>
            <td
              data-sheets-value='{"1":3,"3":4}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              4.00
            </td>
            <td
              data-sheets-value='{"1":3,"3":4}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              4.00
            </td>
            <td data-sheets-value='{"1":2,"2":"440-550"}'>440-550</td>
            <td data-sheets-value='{"1":2,"2":"460-590"}'>460-590</td>
            <td data-sheets-value='{"1":2,"2":"18-24"}'>18-24</td>
          </tr>
          <tr>
            <td
              colspan="2"
              rowspan="1"
              data-sheets-value='{"1":2,"2":"University of Pittsburgh"}'
            >
              University of Pittsburgh
            </td>
            <td data-sheets-value='{"1":2,"2":"III"}'>III</td>
            <td
              data-sheets-value='{"1":2,"2":"Atlantic Coast Conference (ACC)"}'
            >
              Atlantic Coast Conference (ACC)
            </td>
            <td data-sheets-value='{"1":3,"3":39}'>39</td>
            <td
              data-sheets-value='{"1":3,"3":2.7}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              2.70
            </td>
            <td
              data-sheets-value='{"1":3,"3":3.5325}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              3.53
            </td>
            <td
              data-sheets-value='{"1":3,"3":3.815}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              3.82
            </td>
            <td
              data-sheets-value='{"1":3,"3":4}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              4.00
            </td>
            <td
              data-sheets-value='{"1":3,"3":4}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              4.00
            </td>
            <td data-sheets-value='{"1":2,"2":"570-660"}'>570-660</td>
            <td data-sheets-value='{"1":2,"2":"600-680"}'>600-680</td>
            <td data-sheets-value='{"1":2,"2":"26-30"}'>26-30</td>
          </tr>
          <tr>
            <td colspan="2" rowspan="1" data-sheets-value='{"1":2,"2":"UCLA"}'>
              UCLA
            </td>
            <td data-sheets-value='{"1":2,"2":"I"}'>I</td>
            <td data-sheets-value='{"1":2,"2":"PAC-12 Conference"}'>
              PAC-12 Conference
            </td>
            <td data-sheets-value='{"1":3,"3":12}'>12</td>
            <td
              data-sheets-value='{"1":3,"3":2.6}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              2.60
            </td>
            <td
              data-sheets-value='{"1":3,"3":3.575}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              3.58
            </td>
            <td
              data-sheets-value='{"1":3,"3":3.82}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              3.82
            </td>
            <td
              data-sheets-value='{"1":3,"3":4}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              4.00
            </td>
            <td
              data-sheets-value='{"1":3,"3":4}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              4.00
            </td>
            <td data-sheets-value='{"1":2,"2":"560-680"}'>560-680</td>
            <td data-sheets-value='{"1":2,"2":"600-760"}'>600-760</td>
            <td data-sheets-value='{"1":2,"2":"25-31"}'>25-31</td>
          </tr>
          <tr>
            <td
              colspan="2"
              rowspan="1"
              data-sheets-value='{"1":2,"2":"Penn State"}'
            >
              Penn State
            </td>
            <td data-sheets-value='{"1":2,"2":"I"}'>I</td>
            <td data-sheets-value='{"1":2,"2":"Big 10"}'>Big 10</td>
            <td data-sheets-value='{"1":3,"3":26}'>26</td>
            <td
              data-sheets-value='{"1":3,"3":2}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              2.00
            </td>
            <td
              data-sheets-value='{"1":3,"3":3.56}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              3.56
            </td>
            <td
              data-sheets-value='{"1":3,"3":3.86}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              3.86
            </td>
            <td
              data-sheets-value='{"1":3,"3":4}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              4.00
            </td>
            <td
              data-sheets-value='{"1":3,"3":4}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              4.00
            </td>
            <td data-sheets-value='{"1":2,"2":"530-630"}'>530-630</td>
            <td data-sheets-value='{"1":2,"2":"560-670"}'>560-670</td>
            <td data-sheets-value='{"1":2,"2":"25-29"}'>25-29</td>
          </tr>
          <tr>
            <td
              colspan="2"
              rowspan="1"
              data-sheets-value='{"1":2,"2":"Stanford University"}'
            >
              Stanford University
            </td>
            <td data-sheets-value='{"1":2,"2":"I"}'>I</td>
            <td data-sheets-value='{"1":2,"2":"PAC-12 Conference"}'>
              PAC-12 Conference
            </td>
            <td data-sheets-value='{"1":3,"3":11}'>11</td>
            <td
              data-sheets-value='{"1":3,"3":2.6}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              2.60
            </td>
            <td
              data-sheets-value='{"1":3,"3":3.7}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              3.70
            </td>
            <td
              data-sheets-value='{"1":3,"3":3.96}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              3.96
            </td>
            <td
              data-sheets-value='{"1":3,"3":4}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              4.00
            </td>
            <td
              data-sheets-value='{"1":3,"3":4}'
              data-sheets-numberformat='{"1":2,"2":"0.00","3":1}'
            >
              4.00
            </td>
            <td data-sheets-value='{"1":2,"2":"680-780"}'>680-780</td>
            <td data-sheets-value='{"1":2,"2":"700-790"}'>700-790</td>
            <td data-sheets-value='{"1":2,"2":"31-34"}'>31-34</td>
          </tr>
        </tbody>
      </table> -->
      <table class="text-sm table-auto">
        <thead class="bg-secondary text-white">
          <th>School Name</th>
          <th>Athletic Div</th>
          <th>Conference</th>
          <th>
            Ranking*
            <label class="text-xs">(DI NCAA) (DII & DIII Hero Sports)</label>
          </th>

          <th>Min</th>
          <th>25%</th>
          <th>50%</th>
          <th>75%</th>
          <th>Max</th>

          <th>SAT Reading*** 25%-75%</th>
          <th>SAT Math*** 25%-75%</th>
          <th>ACT Composite*** 25%-75%</th>
        </thead>

        <tr
          v-for="entry in athlete.report"
          :key="entry.school"
          class="odd:bg-oddRow"
        >
          <td>{{ entry.school }}</td>
          <td class="text-center">{{ entry.division }}</td>
          <td>{{ entry.conference }}</td>
          <td class="text-center">{{ entry.ranking }}</td>

          <td class="text-center">{{ entry.gpa.min }}</td>
          <td class="text-center">{{ entry.gpa["25%"] }}</td>
          <td class="text-center">{{ entry.gpa["50%"] }}</td>
          <td class="text-center">{{ entry.gpa["75%"] }}</td>
          <td class="text-center">{{ entry.gpa.max }}</td>

          <td class="text-center">
            {{ entry.sat.reading.min }} - {{ entry.sat.reading.max }}
          </td>
          <td class="text-center">
            {{ entry.sat.math.min }} - {{ entry.sat.math.max }}
          </td>
          <td class="text-center">{{ entry.act.min }} - {{ entry.act.max }}</td>
        </tr>
      </table>
    </div>
    <div class="mt-12">
      <p class="text-sm">
        *Rankings for Division I schools based on NCAA data (www.ncaa.com) and
        rankings for Division II & III schools are based on data from Hero
        Sports (www.herosports.com/rankings)
      </p>
      <p class="text-sm">
        ** GPA is based on SportsRecruits members who have shown interest in
        (favorited) the school and have provided their GPA on their profile
      </p>
      <p class="text-sm">
        *** SAT/ACT scores are based on SportsRecruits members who have shown
        interest in (favorited) the school and have provided their SAT/ACT
        scores on their profile
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AcademicFitReport",
  props: {
    athlete: { type: Object, required: false },
  },
};
</script>
