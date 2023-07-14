(()=>{"use strict";class e{constructor(e){this.name=e,this.objectives=[]}getName(){return this.name}getObjectives(){return this.objectives}setObjectives(e){this.objectives=e}getObjective(e){return this.objectives.find((t=>t.getName()===e))}addObjective(e){this.objectives.find((t=>t.getName()===e.name))||this.objectives.push(e)}deleteObjective(e){let t=this.objectives.find((t=>t.getName()===e));this.objectives.splice(this.objectives.indexOf(t),1)}}class t{constructor(e,t,s){this.name=e,this.description=t,this.dueDate=s}getName(){return this.name}setName(e){this.name=e}getDescription(){return this.description}setDescription(e){this.description=e}getDueDate(){return this.dueDate}}class s{constructor(){this.missions=[],this.missions.push(new e("Today")),this.missions.push(new e("This Week"))}setMissions(e){this.missions=e}getMissions(){return this.missions}getMission(e){return this.missions.find((t=>t.getName()===e))}addMission(e){this.missions.find((t=>t.getName()===e.name))||this.missions.push(e)}deleteMission(e){let t=this.missions.find((t=>t.getName()===e));this.missions.splice(this.missions.indexOf(t),1)}}class i{saveQuestMenu(e){localStorage.setItem("questmenu",JSON.stringify(e))}getQuestMenu(){const i=Object.assign(new s,JSON.parse(localStorage.getItem("questmenu")));return i.setMissions(i.getMissions().map((t=>Object.assign(new e,t)))),i.getMissions().forEach((e=>e.setObjectives(e.getObjectives().map((e=>Object.assign(new t,e)))))),i}addMission(e){const t=this.getQuestMenu();t.addMission(e),this.saveQuestMenu(t)}deleteMission(e){const t=this.getQuestMenu();t.deleteMission(e),this.saveQuestMenu(t)}addObjective(e,t){const s=this.getQuestMenu();s.getMission(e).addObjective(t),this.saveQuestMenu(s)}deleteObjective(e,t){const s=this.getQuestMenu();s.getMission(e).deleteObjective(t),this.saveQuestMenu(s)}renameObjective(e,t,s){const i=this.getQuestMenu();i.getMission(e).getObjective(t).setName(s),this.saveQuestMenu(i)}}(()=>{document.querySelector(".main");const s=new i;new e("Testing mission");let n=new e("Trying");s.addMission(n);let o=new t("Testing objective","this is for testing");s.addObjective("Today",o);let c=new t("Trying empty message","testing");s.addObjective("Trying",c);const a=document.querySelector(".missions"),u=document.querySelector(".objectives"),d=document.querySelector(".empty-obj-message");function m(e){const t=document.createElement("li");t.classList.add("mission");const s=document.createElement("h3");return s.textContent=e.getName(),t.addEventListener("click",(()=>{!function(e){u.textContent="";let t=e.getObjectives();0!==t.length?d.style.display="none":d.style.display="block";for(let e of t)u.appendChild(r(e))}(e)})),t.appendChild(s),t}function r(e){const t=document.createElement("li"),s=document.createElement("h4");return s.textContent=e.getName(),t.appendChild(s),t}(function(){let e=s.getQuestMenu().missions;for(let t of e)a.appendChild(m(t))})(),console.log(s.getQuestMenu().missions)})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBRWUsTUFBTUEsRUFDakJDLFlBQVlDLEdBQ1JDLEtBQUtELEtBQU9BLEVBQ1pDLEtBQUtDLFdBQWEsRUFDdEIsQ0FFQUMsVUFDSSxPQUFPRixLQUFLRCxJQUNoQixDQUVBSSxnQkFDSSxPQUFPSCxLQUFLQyxVQUNoQixDQUVBRyxjQUFjSCxHQUNWRCxLQUFLQyxXQUFhQSxDQUN0QixDQUVBSSxhQUFhQyxHQUNULE9BQU9OLEtBQUtDLFdBQVdNLE1BQUtDLEdBQU9BLEVBQUlOLFlBQWNJLEdBQ3pELENBRUFHLGFBQWFDLEdBQ0xWLEtBQUtDLFdBQVdNLE1BQUtDLEdBQU9BLEVBQUlOLFlBQWNRLEVBQU9YLFFBQ3JEQyxLQUFLQyxXQUFXVSxLQUFLRCxFQUU3QixDQUVBRSxnQkFBZ0JOLEdBQ1osSUFBSU8sRUFBY2IsS0FBS0MsV0FBV00sTUFBS0MsR0FBT0EsRUFBSU4sWUFBY0ksSUFDaEVOLEtBQUtDLFdBQVdhLE9BQU9kLEtBQUtDLFdBQVdjLFFBQVFGLEdBQWMsRUFDakUsRUNqQ1csTUFBTUcsRUFDakJsQixZQUFZQyxFQUFNa0IsRUFBYUMsR0FDM0JsQixLQUFLRCxLQUFPQSxFQUNaQyxLQUFLaUIsWUFBY0EsRUFDbkJqQixLQUFLa0IsUUFBVUEsQ0FDbkIsQ0FFQWhCLFVBQ0ksT0FBT0YsS0FBS0QsSUFDaEIsQ0FFQW9CLFFBQVFiLEdBQ0pOLEtBQUtELEtBQU9PLENBQ2hCLENBRUFjLGlCQUNJLE9BQU9wQixLQUFLaUIsV0FDaEIsQ0FFQUksZUFBZUMsR0FDWHRCLEtBQUtpQixZQUFjSyxDQUN2QixDQUVBQyxhQUNJLE9BQU92QixLQUFLa0IsT0FDaEIsRUN2QkcsTUFBTU0sRUFDVDFCLGNBQ0lFLEtBQUt5QixTQUFXLEdBQ2hCekIsS0FBS3lCLFNBQVNkLEtBQUssSUFBSWQsRUFBUSxVQUMvQkcsS0FBS3lCLFNBQVNkLEtBQUssSUFBSWQsRUFBUSxhQUNuQyxDQUVBNkIsWUFBWUQsR0FDUnpCLEtBQUt5QixTQUFXQSxDQUNwQixDQUVBRSxjQUNJLE9BQU8zQixLQUFLeUIsUUFDaEIsQ0FFQUcsV0FBV0MsR0FDUCxPQUFPN0IsS0FBS3lCLFNBQVNsQixNQUFLdUIsR0FBV0EsRUFBUTVCLFlBQWMyQixHQUMvRCxDQUVBRSxXQUFXQyxHQUNIaEMsS0FBS3lCLFNBQVNsQixNQUFLdUIsR0FBV0EsRUFBUTVCLFlBQWM4QixFQUFXakMsUUFDL0RDLEtBQUt5QixTQUFTZCxLQUFLcUIsRUFFM0IsQ0FFQUMsY0FBY0osR0FDVixJQUFJSyxFQUFrQmxDLEtBQUt5QixTQUFTbEIsTUFBS3VCLEdBQVdBLEVBQVE1QixZQUFjMkIsSUFDMUU3QixLQUFLeUIsU0FBU1gsT0FBT2QsS0FBS3lCLFNBQVNWLFFBQVFtQixHQUFrQixFQUNqRSxFQ3pCRyxNQUFNQyxFQUNUQyxjQUFjQyxHQUNWQyxhQUFhQyxRQUFRLFlBQWFDLEtBQUtDLFVBQVVKLEdBQ3JELENBRUFLLGVBQ0ksTUFBTUMsRUFBYUMsT0FBT0MsT0FDdEIsSUFBSXJCLEVBQ0pnQixLQUFLTSxNQUFNUixhQUFhUyxRQUFRLGVBaUJwQyxPQWRBSixFQUFXakIsWUFDUGlCLEVBQVdoQixjQUNWcUIsS0FBSWxCLEdBQVdjLE9BQU9DLE9BQ25CLElBQUloRCxFQUFXaUMsTUFJdkJhLEVBQVdoQixjQUNWc0IsU0FBUW5CLEdBQ0xBLEVBQVExQixjQUNKMEIsRUFBUTNCLGdCQUFnQjZDLEtBQ3BCeEMsR0FBT29DLE9BQU9DLE9BQU8sSUFBSTdCLEVBQVdSLFFBR3pDbUMsQ0FDWCxDQUlBWixXQUFXRCxHQUNQLE1BQU1hLEVBQWEzQyxLQUFLMEMsZUFDeEJDLEVBQVdaLFdBQVdELEdBQ3RCOUIsS0FBS29DLGNBQWNPLEVBQ3ZCLENBRUFWLGNBQWNKLEdBQ1YsTUFBTWMsRUFBYTNDLEtBQUswQyxlQUN4QkMsRUFBV1YsY0FBY0osR0FDekI3QixLQUFLb0MsY0FBY08sRUFDdkIsQ0FFQWxDLGFBQWFvQixFQUFhcUIsR0FDdEIsTUFBTVAsRUFBYTNDLEtBQUswQyxlQUN4QkMsRUFBV2YsV0FBV0MsR0FBYXBCLGFBQWF5QyxHQUNoRGxELEtBQUtvQyxjQUFjTyxFQUN2QixDQUVBL0IsZ0JBQWdCaUIsRUFBYXFCLEdBQ3pCLE1BQU1QLEVBQWEzQyxLQUFLMEMsZUFDeEJDLEVBQVdmLFdBQVdDLEdBQWFqQixnQkFBZ0JzQyxHQUNuRGxELEtBQUtvQyxjQUFjTyxFQUN2QixDQUVBUSxnQkFBZ0J0QixFQUFhdkIsRUFBUzhDLEdBQ2xDLE1BQU1ULEVBQWEzQyxLQUFLMEMsZUFDeEJDLEVBQVdmLFdBQVdDLEdBQWF4QixhQUFhQyxHQUFTYSxRQUFRaUMsR0FDakVwRCxLQUFLb0MsY0FBY08sRUFDdkIsRUMxRE8sTUFDTVUsU0FBU0MsY0FBYyxTQUFwQyxNQUNNQyxFQUFPLElBQUlwQixFQUdILElBQUl0QyxFQUFRLG1CQUExQixJQUNJMkQsRUFBVyxJQUFJM0QsRUFBUSxVQUMzQjBELEVBQUt4QixXQUFXeUIsR0FHaEIsSUFBSU4sRUFBWSxJQUFJbEMsRUFBVSxvQkFBcUIsdUJBQ25EdUMsRUFBSzlDLGFBQWEsUUFBU3lDLEdBQzNCLElBQUlPLEVBQWEsSUFBSXpDLEVBQVUsdUJBQXdCLFdBQ3ZEdUMsRUFBSzlDLGFBQWEsU0FBVWdELEdBRTVCLE1BQU1DLEVBQWNMLFNBQVNDLGNBQWMsYUFDckNLLEVBQWdCTixTQUFTQyxjQUFjLGVBQ3ZDTSxFQUFlUCxTQUFTQyxjQUFjLHNCQUc1QyxTQUFTTyxFQUFxQi9CLEdBQzFCLE1BQU1nQyxFQUFpQlQsU0FBU1UsY0FBYyxNQUM5Q0QsRUFBZUUsVUFBVUMsSUFBSSxXQUM3QixNQUFNQyxFQUFjYixTQUFTVSxjQUFjLE1BVzNDLE9BVkFHLEVBQVlDLFlBQWNyQyxFQUFRNUIsVUFJbEM0RCxFQUFlTSxpQkFBaUIsU0FBUyxNQTZCN0MsU0FBMEJDLEdBSnRCVixFQUFjUSxZQUFjLEdBTTVCLElBQUlHLEVBQWtCRCxFQUFjbEUsZ0JBRU4sSUFBM0JtRSxFQUFnQkMsT0FDZlgsRUFBYVksTUFBTUMsUUFBVSxPQUU3QmIsRUFBYVksTUFBTUMsUUFBVSxRQUVqQyxJQUFJLElBQUl2QixLQUFhb0IsRUFDakJYLEVBQWNlLFlBQVlDLEVBQXVCekIsR0FFekQsQ0F4Q1EwQixDQUFpQjlDLEVBQU8sSUFHNUJnQyxFQUFlWSxZQUFZUixHQUVwQkosQ0FDWCxDQUdBLFNBQVNhLEVBQXVCekIsR0FDNUIsTUFBTTJCLEVBQW1CeEIsU0FBU1UsY0FBYyxNQUMxQ2UsRUFBZ0J6QixTQUFTVSxjQUFjLE1BSzdDLE9BSkFlLEVBQWNYLFlBQWNqQixFQUFVaEQsVUFFdEMyRSxFQUFpQkgsWUFBWUksR0FFdEJELENBQ1gsRUF5QkEsV0FDSSxJQUFJRSxFQUFheEIsRUFBS2IsZUFBZWpCLFNBQ3JDLElBQUksSUFBSUssS0FBV2lELEVBQ2ZyQixFQUFZZ0IsWUFBWWIsRUFBcUIvQixHQUVyRCxFQUVBa0QsR0FDQUMsUUFBUUMsSUFBSTNCLEVBQUtiLGVBQWVqQixTQUVuQyxFQWpGVSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvTWlzc2lvbi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9PYmplY3RpdmUuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvUXVlc3RNZW51LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL1N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE9iamVjdGl2ZSBmcm9tIFwiLi9PYmplY3RpdmVcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNaXNzaW9uIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICAgICAgdGhpcy5vYmplY3RpdmVzID0gW11cbiAgICB9XG5cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lXG4gICAgfVxuXG4gICAgZ2V0T2JqZWN0aXZlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub2JqZWN0aXZlc1xuICAgIH1cblxuICAgIHNldE9iamVjdGl2ZXMob2JqZWN0aXZlcykge1xuICAgICAgICB0aGlzLm9iamVjdGl2ZXMgPSBvYmplY3RpdmVzXG4gICAgfVxuXG4gICAgZ2V0T2JqZWN0aXZlKG9iak5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub2JqZWN0aXZlcy5maW5kKG9iaiA9PiBvYmouZ2V0TmFtZSgpID09PSBvYmpOYW1lKVxuICAgIH1cblxuICAgIGFkZE9iamVjdGl2ZShuZXdPYmopIHtcbiAgICAgICAgaWYoIXRoaXMub2JqZWN0aXZlcy5maW5kKG9iaiA9PiBvYmouZ2V0TmFtZSgpID09PSBuZXdPYmoubmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMub2JqZWN0aXZlcy5wdXNoKG5ld09iailcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlbGV0ZU9iamVjdGl2ZShvYmpOYW1lKSB7XG4gICAgICAgIGxldCBvYmpUb0RlbGV0ZSA9IHRoaXMub2JqZWN0aXZlcy5maW5kKG9iaiA9PiBvYmouZ2V0TmFtZSgpID09PSBvYmpOYW1lKVxuICAgICAgICB0aGlzLm9iamVjdGl2ZXMuc3BsaWNlKHRoaXMub2JqZWN0aXZlcy5pbmRleE9mKG9ialRvRGVsZXRlKSwgMSlcbiAgICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBPYmplY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcbiAgICB9XG5cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lXG4gICAgfVxuXG4gICAgc2V0TmFtZShvYmpOYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG9iak5hbWVcbiAgICB9XG5cbiAgICBnZXREZXNjcmlwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb25cbiAgICB9XG5cbiAgICBzZXREZXNjcmlwdGlvbihuZXdEZXNjcmlwdGlvbikge1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb25cbiAgICB9XG5cbiAgICBnZXREdWVEYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kdWVEYXRlXG4gICAgfVxuXG59IiwiaW1wb3J0IE1pc3Npb24gZnJvbSBcIi4vTWlzc2lvblwiXG5cbmV4cG9ydCBjbGFzcyBRdWVzdE1lbnUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1pc3Npb25zID0gW11cbiAgICAgICAgdGhpcy5taXNzaW9ucy5wdXNoKG5ldyBNaXNzaW9uKFwiVG9kYXlcIikpXG4gICAgICAgIHRoaXMubWlzc2lvbnMucHVzaChuZXcgTWlzc2lvbihcIlRoaXMgV2Vla1wiKSlcbiAgICB9XG5cbiAgICBzZXRNaXNzaW9ucyhtaXNzaW9ucykge1xuICAgICAgICB0aGlzLm1pc3Npb25zID0gbWlzc2lvbnNcbiAgICB9XG5cbiAgICBnZXRNaXNzaW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWlzc2lvbnNcbiAgICB9XG5cbiAgICBnZXRNaXNzaW9uKG1pc3Npb25OYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1pc3Npb25zLmZpbmQobWlzc2lvbiA9PiBtaXNzaW9uLmdldE5hbWUoKSA9PT0gbWlzc2lvbk5hbWUpXG4gICAgfVxuXG4gICAgYWRkTWlzc2lvbihuZXdNaXNzaW9uKSB7XG4gICAgICAgIGlmKCF0aGlzLm1pc3Npb25zLmZpbmQobWlzc2lvbiA9PiBtaXNzaW9uLmdldE5hbWUoKSA9PT0gbmV3TWlzc2lvbi5uYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5taXNzaW9ucy5wdXNoKG5ld01pc3Npb24pXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZGVsZXRlTWlzc2lvbihtaXNzaW9uTmFtZSkge1xuICAgICAgICBsZXQgbWlzc2lvblRvRGVsZXRlID0gdGhpcy5taXNzaW9ucy5maW5kKG1pc3Npb24gPT4gbWlzc2lvbi5nZXROYW1lKCkgPT09IG1pc3Npb25OYW1lKSBcbiAgICAgICAgdGhpcy5taXNzaW9ucy5zcGxpY2UodGhpcy5taXNzaW9ucy5pbmRleE9mKG1pc3Npb25Ub0RlbGV0ZSksIDEpXG4gICAgfVxuXG59IiwiaW1wb3J0IE1pc3Npb24gZnJvbSBcIi4vTWlzc2lvblwiXG5pbXBvcnQgT2JqZWN0aXZlIGZyb20gXCIuL09iamVjdGl2ZVwiXG5pbXBvcnQgeyBRdWVzdE1lbnUgfSBmcm9tIFwiLi9RdWVzdE1lbnVcIlxuXG5cbmV4cG9ydCBjbGFzcyBTdG9yYWdlIHtcbiAgICBzYXZlUXVlc3RNZW51KGRhdGEpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJxdWVzdG1lbnVcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgfVxuXG4gICAgZ2V0UXVlc3RNZW51KCkge1xuICAgICAgICBjb25zdCBxdWVzdHNNZW51ID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIG5ldyBRdWVzdE1lbnUoKSxcbiAgICAgICAgICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJxdWVzdG1lbnVcIikpXG4gICAgICAgIClcblxuICAgICAgICBxdWVzdHNNZW51LnNldE1pc3Npb25zKFxuICAgICAgICAgICAgcXVlc3RzTWVudS5nZXRNaXNzaW9ucygpXG4gICAgICAgICAgICAubWFwKG1pc3Npb24gPT4gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgICBuZXcgTWlzc2lvbigpLCBtaXNzaW9uXG4gICAgICAgICAgICApKVxuICAgICAgICApXG5cbiAgICAgICAgcXVlc3RzTWVudS5nZXRNaXNzaW9ucygpXG4gICAgICAgIC5mb3JFYWNoKG1pc3Npb24gPT4gXG4gICAgICAgICAgICBtaXNzaW9uLnNldE9iamVjdGl2ZXMoXG4gICAgICAgICAgICAgICAgbWlzc2lvbi5nZXRPYmplY3RpdmVzKCkubWFwKFxuICAgICAgICAgICAgICAgICAgICBvYmogPT4gT2JqZWN0LmFzc2lnbihuZXcgT2JqZWN0aXZlLCBvYmopKVxuICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIHJldHVybiBxdWVzdHNNZW51XG4gICAgfVxuXG4gICAgLy9NYWtlIHN1cmUgcGFyYW1ldGVycyB3aXRoIC1OYW1lIGhhcyAuZ2V0TmFtZSgpIG9yIGl0IHdpbGwgZGVsZXRlIHdyb25nIGl0ZW1cblxuICAgIGFkZE1pc3Npb24obWlzc2lvbikge1xuICAgICAgICBjb25zdCBxdWVzdHNNZW51ID0gdGhpcy5nZXRRdWVzdE1lbnUoKVxuICAgICAgICBxdWVzdHNNZW51LmFkZE1pc3Npb24obWlzc2lvbilcbiAgICAgICAgdGhpcy5zYXZlUXVlc3RNZW51KHF1ZXN0c01lbnUpXG4gICAgfVxuXG4gICAgZGVsZXRlTWlzc2lvbihtaXNzaW9uTmFtZSkge1xuICAgICAgICBjb25zdCBxdWVzdHNNZW51ID0gdGhpcy5nZXRRdWVzdE1lbnUoKVxuICAgICAgICBxdWVzdHNNZW51LmRlbGV0ZU1pc3Npb24obWlzc2lvbk5hbWUpXG4gICAgICAgIHRoaXMuc2F2ZVF1ZXN0TWVudShxdWVzdHNNZW51KVxuICAgIH1cblxuICAgIGFkZE9iamVjdGl2ZShtaXNzaW9uTmFtZSwgb2JqZWN0aXZlKSB7XG4gICAgICAgIGNvbnN0IHF1ZXN0c01lbnUgPSB0aGlzLmdldFF1ZXN0TWVudSgpXG4gICAgICAgIHF1ZXN0c01lbnUuZ2V0TWlzc2lvbihtaXNzaW9uTmFtZSkuYWRkT2JqZWN0aXZlKG9iamVjdGl2ZSlcbiAgICAgICAgdGhpcy5zYXZlUXVlc3RNZW51KHF1ZXN0c01lbnUpXG4gICAgfVxuXG4gICAgZGVsZXRlT2JqZWN0aXZlKG1pc3Npb25OYW1lLCBvYmplY3RpdmUpIHtcbiAgICAgICAgY29uc3QgcXVlc3RzTWVudSA9IHRoaXMuZ2V0UXVlc3RNZW51KClcbiAgICAgICAgcXVlc3RzTWVudS5nZXRNaXNzaW9uKG1pc3Npb25OYW1lKS5kZWxldGVPYmplY3RpdmUob2JqZWN0aXZlKVxuICAgICAgICB0aGlzLnNhdmVRdWVzdE1lbnUocXVlc3RzTWVudSlcbiAgICB9XG5cbiAgICByZW5hbWVPYmplY3RpdmUobWlzc2lvbk5hbWUsIG9iak5hbWUsIG5ld09iak5hbWUpIHtcbiAgICAgICAgY29uc3QgcXVlc3RzTWVudSA9IHRoaXMuZ2V0UXVlc3RNZW51KClcbiAgICAgICAgcXVlc3RzTWVudS5nZXRNaXNzaW9uKG1pc3Npb25OYW1lKS5nZXRPYmplY3RpdmUob2JqTmFtZSkuc2V0TmFtZShuZXdPYmpOYW1lKVxuICAgICAgICB0aGlzLnNhdmVRdWVzdE1lbnUocXVlc3RzTWVudSlcbiAgICB9XG5cbn0iLCJpbXBvcnQgIE1pc3Npb24gIGZyb20gXCIuL01pc3Npb25cIjtcbmltcG9ydCBPYmplY3RpdmUgZnJvbSBcIi4vT2JqZWN0aXZlXCI7XG5pbXBvcnQgeyBRdWVzdE1lbnUgfSBmcm9tIFwiLi9RdWVzdE1lbnVcIjtcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tIFwiLi9TdG9yYWdlXCI7XG5cbmNvbnN0IFVJID0gKCgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpXG4gICAgY29uc3QgdGVzdCA9IG5ldyBTdG9yYWdlKClcbiAgICBcbiAgICAvL0R1bW15IE1pc3Npb25zXG4gICAgbGV0IG1pc3Npb24gPSBuZXcgTWlzc2lvbihcIlRlc3RpbmcgbWlzc2lvblwiKVxuICAgIGxldCBtaXNzaW9uMiA9IG5ldyBNaXNzaW9uKFwiVHJ5aW5nXCIpXG4gICAgdGVzdC5hZGRNaXNzaW9uKG1pc3Npb24yKVxuXG4gICAgLy9EdW1teSBPYmplY3RpdmVzXG4gICAgbGV0IG9iamVjdGl2ZSA9IG5ldyBPYmplY3RpdmUoXCJUZXN0aW5nIG9iamVjdGl2ZVwiLCBcInRoaXMgaXMgZm9yIHRlc3RpbmdcIilcbiAgICB0ZXN0LmFkZE9iamVjdGl2ZShcIlRvZGF5XCIsIG9iamVjdGl2ZSlcbiAgICBsZXQgb2JqZWN0aXZlMiA9IG5ldyBPYmplY3RpdmUoXCJUcnlpbmcgZW1wdHkgbWVzc2FnZVwiLCBcInRlc3RpbmdcIilcbiAgICB0ZXN0LmFkZE9iamVjdGl2ZShcIlRyeWluZ1wiLCBvYmplY3RpdmUyKVxuICAgIFxuICAgIGNvbnN0IG1pc3Npb25zQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5taXNzaW9uc1wiKVxuICAgIGNvbnN0IG9iamVjdGl2ZXNCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9iamVjdGl2ZXNcIilcbiAgICBjb25zdCBlbXB0eU1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVtcHR5LW9iai1tZXNzYWdlXCIpIFxuXG4gICAgLy90aGlzIGZ1bmN0aW9uIHRha2VzIG1pc3Npb24gb2JqZWN0IHNvIGVsZW1lbnQgdGV4dHMgbXVzdCBiZSB0YWtlbiBmcm9tIGl0cyBwcm9wZXJ0aWVzXG4gICAgZnVuY3Rpb24gY3JlYXRlTWlzc2lvbkVsZW1lbnQobWlzc2lvbikge1xuICAgICAgICBjb25zdCBtaXNzaW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxuICAgICAgICBtaXNzaW9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibWlzc2lvblwiKVxuICAgICAgICBjb25zdCBtaXNzaW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKVxuICAgICAgICBtaXNzaW9uVGV4dC50ZXh0Q29udGVudCA9IG1pc3Npb24uZ2V0TmFtZSgpXG5cbiAgICAvL1RPRE8gY3JlYXRlIGxpc3RlbmVyIHRvIHJlbmRlciBvYmplY3RpdmVzIGZvciB0aGUgbWlzc2lvblxuXG4gICAgICAgIG1pc3Npb25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICByZW5kZXJPYmplY3RpdmVzKG1pc3Npb24pXG4gICAgICAgIH0pXG5cbiAgICAgICAgbWlzc2lvbkVsZW1lbnQuYXBwZW5kQ2hpbGQobWlzc2lvblRleHQpXG5cbiAgICAgICAgcmV0dXJuIG1pc3Npb25FbGVtZW50XG4gICAgfVxuXG4gICAgLy90aGlzIGZ1bmN0aW9uIHRha2VzIG9iamVjdGl2ZSBvYmplY3Qgc28gZWxlbWVudCB0ZXh0cyBtdXN0IGJlIHRha2VuIGZyb20gaXRzIHByb3BlcnRpZXMgXG4gICAgZnVuY3Rpb24gY3JlYXRlT2JqZWN0aXZlRWxlbWVudChvYmplY3RpdmUpIHtcbiAgICAgICAgY29uc3Qgb2JqZWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxuICAgICAgICBjb25zdCBvYmplY3RpdmVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpXG4gICAgICAgIG9iamVjdGl2ZVRleHQudGV4dENvbnRlbnQgPSBvYmplY3RpdmUuZ2V0TmFtZSgpXG4gICAgICAgIFxuICAgICAgICBvYmplY3RpdmVFbGVtZW50LmFwcGVuZENoaWxkKG9iamVjdGl2ZVRleHQpXG5cbiAgICAgICAgcmV0dXJuIG9iamVjdGl2ZUVsZW1lbnRcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhck1pc3Npb25zKCkge1xuICAgICAgICBtaXNzaW9uc0JveC50ZXh0Q29udGVudCA9IFwiXCJcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhck9iamVjdGl2ZXMoKSB7XG4gICAgICAgIG9iamVjdGl2ZXNCb3gudGV4dENvbnRlbnQgPSBcIlwiXG4gICAgfVxuXG4gICAgLy9SZW5kZXJpbmcgZnVuY3Rpb25zXG4gICAgZnVuY3Rpb24gcmVuZGVyT2JqZWN0aXZlcyhjaG9zZW5NaXNzaW9uKSB7XG4gICAgICAgIGNsZWFyT2JqZWN0aXZlcygpXG4gICAgICAgIGxldCBvYmplY3RpdmVzQXJyYXkgPSBjaG9zZW5NaXNzaW9uLmdldE9iamVjdGl2ZXMoKVxuICAgICAgICAvL2lmIGFycmF5IGlzIGVtcHR5IGNyZWF0ZSBtZXNzYWdlXG4gICAgICAgIGlmKG9iamVjdGl2ZXNBcnJheS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIGVtcHR5TWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVtcHR5TWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgICAgIH1cbiAgICAgICAgZm9yKGxldCBvYmplY3RpdmUgb2Ygb2JqZWN0aXZlc0FycmF5KSB7XG4gICAgICAgICAgICBvYmplY3RpdmVzQm94LmFwcGVuZENoaWxkKGNyZWF0ZU9iamVjdGl2ZUVsZW1lbnQob2JqZWN0aXZlKSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlck1pc3Npb25zKCkge1xuICAgICAgICBsZXQgcXVlc3RBcnJheSA9IHRlc3QuZ2V0UXVlc3RNZW51KCkubWlzc2lvbnNcbiAgICAgICAgZm9yKGxldCBtaXNzaW9uIG9mIHF1ZXN0QXJyYXkpIHtcbiAgICAgICAgICAgIG1pc3Npb25zQm94LmFwcGVuZENoaWxkKGNyZWF0ZU1pc3Npb25FbGVtZW50KG1pc3Npb24pKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyTWlzc2lvbnMoKVxuICAgIGNvbnNvbGUubG9nKHRlc3QuZ2V0UXVlc3RNZW51KCkubWlzc2lvbnMpXG4gICAgcmV0dXJuIG1haW5cbn0pKClcbiJdLCJuYW1lcyI6WyJNaXNzaW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwidGhpcyIsIm9iamVjdGl2ZXMiLCJnZXROYW1lIiwiZ2V0T2JqZWN0aXZlcyIsInNldE9iamVjdGl2ZXMiLCJnZXRPYmplY3RpdmUiLCJvYmpOYW1lIiwiZmluZCIsIm9iaiIsImFkZE9iamVjdGl2ZSIsIm5ld09iaiIsInB1c2giLCJkZWxldGVPYmplY3RpdmUiLCJvYmpUb0RlbGV0ZSIsInNwbGljZSIsImluZGV4T2YiLCJPYmplY3RpdmUiLCJkZXNjcmlwdGlvbiIsImR1ZURhdGUiLCJzZXROYW1lIiwiZ2V0RGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsIm5ld0Rlc2NyaXB0aW9uIiwiZ2V0RHVlRGF0ZSIsIlF1ZXN0TWVudSIsIm1pc3Npb25zIiwic2V0TWlzc2lvbnMiLCJnZXRNaXNzaW9ucyIsImdldE1pc3Npb24iLCJtaXNzaW9uTmFtZSIsIm1pc3Npb24iLCJhZGRNaXNzaW9uIiwibmV3TWlzc2lvbiIsImRlbGV0ZU1pc3Npb24iLCJtaXNzaW9uVG9EZWxldGUiLCJTdG9yYWdlIiwic2F2ZVF1ZXN0TWVudSIsImRhdGEiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImdldFF1ZXN0TWVudSIsInF1ZXN0c01lbnUiLCJPYmplY3QiLCJhc3NpZ24iLCJwYXJzZSIsImdldEl0ZW0iLCJtYXAiLCJmb3JFYWNoIiwib2JqZWN0aXZlIiwicmVuYW1lT2JqZWN0aXZlIiwibmV3T2JqTmFtZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRlc3QiLCJtaXNzaW9uMiIsIm9iamVjdGl2ZTIiLCJtaXNzaW9uc0JveCIsIm9iamVjdGl2ZXNCb3giLCJlbXB0eU1lc3NhZ2UiLCJjcmVhdGVNaXNzaW9uRWxlbWVudCIsIm1pc3Npb25FbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsIm1pc3Npb25UZXh0IiwidGV4dENvbnRlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2hvc2VuTWlzc2lvbiIsIm9iamVjdGl2ZXNBcnJheSIsImxlbmd0aCIsInN0eWxlIiwiZGlzcGxheSIsImFwcGVuZENoaWxkIiwiY3JlYXRlT2JqZWN0aXZlRWxlbWVudCIsInJlbmRlck9iamVjdGl2ZXMiLCJvYmplY3RpdmVFbGVtZW50Iiwib2JqZWN0aXZlVGV4dCIsInF1ZXN0QXJyYXkiLCJyZW5kZXJNaXNzaW9ucyIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9