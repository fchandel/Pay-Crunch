(window["webpackJsonptime-tracker"]=window["webpackJsonptime-tracker"]||[]).push([[0],{138:function(A,t,e){"use strict";e.r(t);var a=e(1),n=e.n(a),o=e(2),r=e.n(o),C=(e(84),e(53)),l=e.n(C),s=e(72),i=e(23),c=e(32),g=e(33),Q=e(35),u=e(34),d=e(8),B=e(36),E=(e(56),e(57),e(37)),h=e.n(E),m=(e(58),e(3)),I=e.n(m),k=e(77),f=e.n(k),J=e(55),v=function(A){function t(){return Object(c.a)(this,t),Object(Q.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(B.a)(t,A),Object(g.a)(t,[{key:"render",value:function(){var A=this;return n.a.createElement(f.a,{id:"myTable",striped:!0,hover:!0,variant:"dark"},n.a.createElement("thead",{className:"table-header"},n.a.createElement("tr",null,n.a.createElement("th",null,"#"),n.a.createElement("th",null,"Start Time"),n.a.createElement("th",null,"End Time"),n.a.createElement("th",null,"Hours "))),n.a.createElement("tbody",null,this.props.days.map((function(t){return n.a.createElement("tr",{key:t.id},n.a.createElement("td",null,t.id+1),n.a.createElement("td",null,n.a.createElement(J.a,{showSecond:!1,defaultValue:A.props.defaultStart,className:"xxx",onChange:function(e){return A.props.onChangeStart(e,t.id)},format:A.props.format,use12Hours:!0,inputReadOnly:!0})),n.a.createElement("td",null,n.a.createElement(J.a,{showSecond:!1,defaultValue:A.props.defaultEnd,className:"xxx",onChange:function(e){return A.props.onChangeEnd(e,t.id)},format:A.props.format,use12Hours:!0,inputReadOnly:!0})),n.a.createElement("td",null,t.total))}))))}}]),t}(n.a.Component),y=e(78),p=e.n(y),K=function(A){function t(A){var e;return Object(c.a)(this,t),(e=Object(Q.a)(this,Object(u.a)(t).call(this,A))).state={counter:0,format:"h:mm a",totalHours:0,days:[],defaultStart:I()().hour(10).minute(0),defaultEnd:I()().hour(19).minute(0),employeeName:""},e.onChangeStart=e.onChangeStart.bind(Object(d.a)(e)),e.onChangeEnd=e.onChangeEnd.bind(Object(d.a)(e)),e.addRow=e.addRow.bind(Object(d.a)(e)),e.calculateHours=e.calculateHours.bind(Object(d.a)(e)),e.calculateTotalForDay=e.calculateTotalForDay.bind(Object(d.a)(e)),e.displayHelp=e.displayHelp.bind(Object(d.a)(e)),e.displayTable=e.displayTable.bind(Object(d.a)(e)),e.printReport=e.printReport.bind(Object(d.a)(e)),e}return Object(B.a)(t,A),Object(g.a)(t,[{key:"calculateDifferenceInDefaultHours",value:function(){var A=I()(this.state.defaultStart,"h:mm a"),t=I()(this.state.defaultEnd,"h:mm a"),e=I.a.duration(t.diff(A)).asHours();return Math.round(10*e)/10}},{key:"calculateHours",value:function(){var A=0;this.state.days.map((function(t){return A+=t.total})),this.setState({totalHours:A})}},{key:"calculateTotalForDay",value:function(A){var t=Object(i.a)(this.state.days),e=t[A].start,a=t[A].end,n=I()(e,"h:mm a"),o=I()(a,"h:mm a"),r=I.a.duration(o.diff(n)).asHours(),C=Math.round(20*r)/20;t[A].total=C}},{key:"onChangeStart",value:function(A,t){var e=this;if(void 0!=A&&""!=A&&null!=A){var a=Object(i.a)(this.state.days);a[t].start=A.format(this.state.format);var n=I()(a[t].start,["h:mm A"]);this.setState({days:a,defaultStart:n},(function(){console.log("On Change Start",e.state)})),this.calculateTotalForDay(t)}}},{key:"onChangeEnd",value:function(A,t){var e=this;if(void 0!=A&&""!=A&&null!=A){var a=Object(i.a)(this.state.days);a[t].end=A.format(this.state.format);var n=I()(a[t].end,["h:mm A"]);this.setState({days:a,defaultEnd:n},(function(){console.log("On Change End",e.state)})),this.calculateTotalForDay(t)}}},{key:"addRow",value:function(){var A=this,t={id:this.state.counter,start:this.state.defaultStart,end:this.state.defaultEnd,total:this.calculateDifferenceInDefaultHours()};this.setState((function(e){return{counter:A.state.counter+1,days:[].concat(Object(i.a)(e.days),[t])}}))}},{key:"displayHelp",value:function(){if(!this.counterActive())return n.a.createElement("div",null,n.a.createElement("h2",{className:"hint"},'Click "Add Day" to get started!'),n.a.createElement("img",{className:"icon",src:p.a,height:"100px"}))}},{key:"counterActive",value:function(){return 0!=this.state.counter}},{key:"displayTable",value:function(){return this.counterActive()?n.a.createElement(v,{format:this.state.format,days:this.state.days,defaultStart:this.state.defaultStart,defaultEnd:this.state.defaultEnd,onChangeStart:this.onChangeStart,onChangeEnd:this.onChangeEnd}):""}},{key:"setupHeader",value:function(A){var t=A.createTHead().insertRow(),e=t.insertCell(0),a=t.insertCell(1),n=t.insertCell(2),o=t.insertCell(3);e.innerHTML="Day #",a.innerHTML="Start Time",n.innerHTML="End Time",o.innerHTML="Total Time Worked"}},{key:"setupTable",value:function(){var A=document.createElement("table");A.classList.add("tableToPrint"),A.classList.add("print");var t=this.state.format;return this.setupHeader(A),this.state.days.map((function(e,a){var n=I()(e.start,["h:mm A"]),o=I()(e.end,["h:mm A"]);console.log("key",e),console.log("key start",e.start),console.log("key end",e.end);var r=A.insertRow(),C=r.insertCell(0),l=r.insertCell(1),s=r.insertCell(2),i=r.insertCell(3);C.innerHTML=e.id,l.innerHTML=n.format(t),s.innerHTML=o.format(t),i.innerHTML=e.total})),document.body.appendChild(A),A}},{key:"setupTotalRow",value:function(){var A=this.state.totalHours,t=document.createElement("div");return t.classList.add("totalRowForPrint"),t.classList.add("print"),t.innerHTML="Total Hours worked = "+A,document.body.appendChild(t),t}},{key:"printReport",value:function(){var A=Object(s.a)(l.a.mark((function A(){var t,e;return l.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,this.calculateHours();case 2:document.getElementById("myTable"),t=this.setupTable(),e=this.setupTotalRow(),window.print(),document.body.removeChild(t),document.body.removeChild(e);case 8:case"end":return A.stop()}}),A,this)})));return function(){return A.apply(this,arguments)}}()},{key:"render",value:function(){return n.a.createElement("div",{className:"App no-print"},n.a.createElement("header",{className:"App-header"},this.displayHelp(),n.a.createElement("div",{className:"tableDiv container-max"},this.displayTable()),n.a.createElement("div",{className:"white bottom-bar"},n.a.createElement("div",{className:"container-max grid-bottom"},n.a.createElement("div",{className:"float-left item1"},"Total Hours Worked This Month: ",this.state.totalHours),n.a.createElement("div",{className:"buttons"},n.a.createElement(h.a,{variant:"success",className:"p-20 shadow-none",onClick:this.addRow},"Add Day"),n.a.createElement("br",null),n.a.createElement(h.a,{variant:"success",className:"p-20 shadow-none",onClick:this.calculateHours},"Calculate Hours"),n.a.createElement("br",null),this.state.counter?n.a.createElement(h.a,{variant:"success",className:"p-20 shadow-none",onClick:this.printReport},"Print"):"")))))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(A){A.unregister()}))},56:function(A,t,e){},78:function(A,t){A.exports="data:image/png;base64,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"},79:function(A,t,e){A.exports=e(138)},84:function(A,t,e){}},[[79,1,2]]]);
//# sourceMappingURL=main.238786a3.chunk.js.map