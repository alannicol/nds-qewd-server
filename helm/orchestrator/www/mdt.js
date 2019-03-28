webpackJsonp([21],{"./src/components/pages/MDTs/MDTs.js":function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,n,r,o,i,u,d,m,c=a("./node_modules/babel-runtime/helpers/defineProperty.js"),f=l(c),p=a("./node_modules/babel-runtime/helpers/extends.js"),E=l(p),T=a("./node_modules/babel-runtime/helpers/classCallCheck.js"),N=l(T),v=a("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),D=l(v),S=a("./node_modules/babel-runtime/helpers/inherits.js"),M=l(S),_=a("./node_modules/recompose/compose.js"),b=l(_),h=a("./node_modules/recompose/lifecycle.js"),O=l(h),g=a("./node_modules/lodash/fp/size.js"),P=l(g),C=a("./node_modules/lodash/fp/isEmpty.js"),F=l(C),I=a("./node_modules/lodash/fp/toLower.js"),x=l(I),A=a("./node_modules/react/react.js"),j=l(A),U=a("./node_modules/prop-types/index.js"),y=l(U),R=a("./node_modules/react-bootstrap/es/index.js"),L=a("./node_modules/classnames/index.js"),V=l(L),Q=a("./node_modules/redux/es/index.js"),Y=a("./node_modules/react-redux/es/index.js"),k=a("./src/components/plugin-page-component/PluginListHeader.js"),w=l(k),B=a("./src/components/plugin-page-component/PluginCreate.js"),G=l(B),K=a("./src/components/plugin-page-component/PluginMainPanel.js"),q=l(K),H=a("./src/components/pages/MDTs/MDTsCreate/MDTsCreateForm.js"),z=l(H),W=a("./src/components/pages/MDTs/table-columns.config.js"),J=a("./src/components/pages/MDTs/forms.config.js"),X=a("./src/components/pages/MDTs/ducks/fetch-patient-mdts.duck.js"),Z=a("./src/components/pages/MDTs/ducks/fetch-patient-mdts-detail.duck.js"),$=a("./src/components/pages/MDTs/ducks/fetch-patient-mdts-detail-edit.duck.js"),ee=a("./src/components/pages/MDTs/ducks/fetch-patient-mdts-create.duck.js"),te=a("./src/utils/HOCs/fetch-patients.utils.js"),ae=a("./src/components/pages/MDTs/selectors.js"),le=a("./src/config/client-urls.constants.js"),se=a("./src/components/pages/MDTs/MDTsDetail/MDTsDetail.js"),ne=l(se),re=a("./src/utils/time-helpers.utils.js"),oe=a("./src/utils/plugin-helpers.utils.js"),ie="mdtsMain",ue="mdtsCreate",de="mdtsPanel",me=function(e){return{actions:(0,Q.bindActionCreators)({fetchPatientMDTsRequest:X.fetchPatientMDTsRequest,fetchPatientMDTsDetailRequest:Z.fetchPatientMDTsDetailRequest,fetchPatientMDTsDetailEditRequest:$.fetchPatientMDTsDetailEditRequest,fetchPatientMDTsCreateRequest:ee.fetchPatientMDTsCreateRequest},e)}},ce=(s=(0,Y.connect)(ae.patientMDTsSelector,me),n=(0,Y.connect)(ae.patientMDTsDetailSelector,me),r=(0,Y.connect)(ae.mdtPanelFormSelector),o=(0,Y.connect)(ae.mdtCreateFormStateSelector),i=(0,b.default)((0,O.default)(te.fetchPatientMDTsOnMount),(0,O.default)(te.fetchPatientMDTsDetailOnMount)),s(u=n(u=r(u=o(u=i((m=d=function(e){function t(){var a,l,s;(0,N.default)(this,t);for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];return a=l=(0,D.default)(this,e.call.apply(e,[this].concat(r))),l.state={nameShouldInclude:"",selectedColumns:W.defaultColumnsSelected,openedPanel:de,columnNameSortBy:J.valuesNames.DATE_OF_REQUEST,sortingOrder:"asc",expandedPanel:"all",isBtnCreateVisible:!0,isBtnExpandVisible:!1,isAllPanelsVisible:!1,isDetailPanelVisible:!1,isSecondPanel:!1,isCreatePanelVisible:!1,editedPanel:{},offset:0,isSubmit:!1,isLoading:!0},l.handleExpand=function(e,t){t===ie?"all"===l.state.expandedPanel?l.setState({expandedPanel:e}):l.setState({expandedPanel:"all"}):"all"===l.state.expandedPanel?l.setState({expandedPanel:e,openedPanel:e}):l.setState({expandedPanel:"all"})},l.handleFilterChange=function(e){var t=e.target.value;return l.setState({nameShouldInclude:(0,x.default)(t)})},l.handleHeaderCellClick=function(e,t){var a=t.name,s=t.sortingOrder;return l.setState({columnNameSortBy:a,sortingOrder:s})},l.handleDetailMDTsClick=function(e){var t=l.props,a=t.actions,s=t.userId;l.setState({isSecondPanel:!0,isDetailPanelVisible:!0,isBtnExpandVisible:!0,isBtnCreateVisible:!0,isCreatePanelVisible:!1,openedPanel:de,editedPanel:{},expandedPanel:"all",isLoading:!0}),a.fetchPatientMDTsDetailRequest({userId:s,sourceId:e}),l.context.router.history.push(le.clientUrls.PATIENTS+"/"+s+"/"+le.clientUrls.MDTS+"/"+e)},l.handleSetOffset=function(e){return l.setState({offset:e})},l.handleCreate=function(){var e=l.props.userId;l.setState({isBtnCreateVisible:!1,isCreatePanelVisible:!0,openedPanel:ue,isSecondPanel:!0,isDetailPanelVisible:!1,isBtnExpandVisible:!0,expandedPanel:"all",isSubmit:!1,isLoading:!0}),l.context.router.history.push(le.clientUrls.PATIENTS+"/"+e+"/"+le.clientUrls.MDTS+"/create")},l.handleEdit=function(e){l.setState(function(t){return{editedPanel:(0,E.default)({},t.editedPanel,(0,f.default)({},e,!0)),isSubmit:!1}})},l.handleMDTsDetailCancel=function(e){l.setState(function(t){return{editedPanel:(0,E.default)({},t.editedPanel,(0,f.default)({},e,!1)),isSubmit:!1,isLoading:!0}})},l.handleSaveSettingsDetailForm=function(e,t){var a=l.props,s=a.actions,n=a.mdtFormState;(0,oe.checkIsValidateForm)(n)?(s.fetchPatientMDTsDetailEditRequest(l.formValuesToString(e,"edit")),l.setState(function(e){return{editedPanel:(0,E.default)({},e.editedPanel,(0,f.default)({},t,!1)),isSubmit:!1,isLoading:!0}})):l.setState({isSubmit:!0})},l.handleCreateCancel=function(){var e=l.props.userId;l.setState({isBtnCreateVisible:!0,isCreatePanelVisible:!1,openedPanel:de,isSecondPanel:!1,isBtnExpandVisible:!1,expandedPanel:"all",isSubmit:!1,isLoading:!0}),l.context.router.history.push(le.clientUrls.PATIENTS+"/"+e+"/"+le.clientUrls.MDTS)},l.handleSaveSettingsCreateForm=function(e){var t=l.props,a=t.actions,s=t.userId,n=t.mdtCreateFormState;(0,oe.checkIsValidateForm)(n)?(a.fetchPatientMDTsCreateRequest(l.formValuesToString(e,"create")),l.context.router.history.push(le.clientUrls.PATIENTS+"/"+s+"/"+le.clientUrls.MDTS),l.hideCreateForm(),l.setState({isLoading:!0})):l.setState({isSubmit:!0})},l.formValuesToString=function(e,t){var a=l.props,s=a.userId,n=a.mdtDetail,r={};return r.userId=s,r[J.valuesNames.TEAM]=e[J.valuesNames.TEAM],r[J.valuesNames.LINK]=e[J.valuesNames.LINK],r[J.valuesNames.QUESTION]=e[J.valuesNames.QUESTION],r[J.valuesNames.NOTES]=e[J.valuesNames.NOTES],r[J.valuesNames.DATE_OF_REQUEST]=new Date(e[J.valuesNames.DATE_OF_REQUEST]).getTime(),r[J.valuesNames.DATE_OF_MEETING]=new Date(e[J.valuesNames.DATE_OF_MEETING]).getTime(),r[J.valuesNames.DATE_CREATED]=(new Date).getTime(),"edit"===t&&(r[J.valuesNames.SOURCE_ID]=n[J.valuesNames.SOURCE_ID],r[J.valuesNames.SOURCE]=n[J.valuesNames.SOURCE]),"create"===t&&(r[J.valuesNames.SOURCE]=e[J.valuesNames.SOURCE]),oe.operationsOnCollection.propsToString(r,J.valuesNames.DATE_OF_REQUEST,J.valuesNames.DATE_OF_MEETING,J.valuesNames.DATE_CREATED),r},l.hideCreateForm=function(){l.setState({isBtnCreateVisible:!0,isCreatePanelVisible:!1,openedPanel:de,isSecondPanel:!1,expandedPanel:"all",isBtnExpandVisible:!1})},l.formToShowCollection=function(e){var t=l.state,a=t.columnNameSortBy,s=t.sortingOrder,n=t.nameShouldInclude;return e=oe.operationsOnCollection.modificate(e,[{keyFrom:J.valuesNames.DATE_OF_REQUEST,keyTo:J.valuesNames.DATE_OF_REQUEST+"Convert",fn:re.getDDMMMYYYY},{keyFrom:J.valuesNames.DATE_OF_MEETING,keyTo:J.valuesNames.DATE_OF_MEETING+"Convert",fn:re.getDDMMMYYYY}]),oe.operationsOnCollection.filterAndSort({collection:e,filterBy:n,sortingByKey:a,sortingByOrder:s,filterKeys:[J.valuesNames.DATE_OF_REQUEST+"Convert",J.valuesNames.TEAM,J.valuesNames.DATE_OF_MEETING+"Convert",J.valuesNames.SOURCE]})},s=a,(0,D.default)(l,s)}return(0,M.default)(t,e),t.prototype.componentWillReceiveProps=function(){var e=this,t=this.context.router.route.match.params.sourceId,a=this.context.router.route.match.params.userId;this.context.router.history.location.pathname===le.clientUrls.PATIENTS+"/"+a+"/"+le.clientUrls.MDTS+"/"+t&&void 0!==t&&this.setState({isSecondPanel:!0,isDetailPanelVisible:!0,isBtnExpandVisible:!0,isBtnCreateVisible:!0,isCreatePanelVisible:!1}),this.context.router.history.location.pathname===le.clientUrls.PATIENTS+"/"+a+"/"+le.clientUrls.MDTS+"/create"&&this.setState({isSecondPanel:!0,isBtnExpandVisible:!0,isBtnCreateVisible:!1,isCreatePanelVisible:!0,openedPanel:ue,isDetailPanelVisible:!1}),this.context.router.history.location.pathname===le.clientUrls.PATIENTS+"/"+a+"/"+le.clientUrls.MDTS&&this.setState({isSecondPanel:!1,isBtnExpandVisible:!1,isBtnCreateVisible:!0,isCreatePanelVisible:!1,openedPanel:de,isDetailPanelVisible:!1}),setTimeout(function(){e.setState({isLoading:!1})},500)},t.prototype.render=function(){var e=this.state,t=e.selectedColumns,a=e.columnNameSortBy,l=e.sortingOrder,s=e.isSecondPanel,n=e.isDetailPanelVisible,r=e.isBtnExpandVisible,o=e.expandedPanel,i=e.openedPanel,u=e.isBtnCreateVisible,d=e.isCreatePanelVisible,m=e.editedPanel,c=e.offset,f=e.isSubmit,p=e.isLoading,E=this.props,T=E.allMDTs,N=E.mdtDetail,v=E.mdtFormState,D=E.mdtCreateFormState,S="mdtsDetail"===o||o===de,M=o===ie,_=o===ue,b=W.columnsConfig.filter(function(e){return t[e.key]}),h=this.formToShowCollection(T),O=void 0;return n&&!(0,F.default)(N)&&(O=N[J.valuesNames.SOURCE_ID]),j.default.createElement("section",{className:"page-wrapper"},j.default.createElement("div",{className:(0,V.default)("section",{"full-panel full-panel-main":M,"full-panel full-panel-details":S||_})},j.default.createElement(R.Row,null,M||"all"===o?j.default.createElement(R.Col,{xs:12,className:(0,V.default)({"col-panel-main":s})},j.default.createElement("div",{className:"panel panel-primary"},j.default.createElement(w.default,{onFilterChange:this.handleFilterChange,panelTitle:"Generic MDT",isBtnExpandVisible:r,isBtnTableVisible:!0,name:ie,onExpand:this.handleExpand,currentPanel:ie}),j.default.createElement(q.default,{headers:b,resourceData:T,emptyDataMessage:"No MDTs",onHeaderCellClick:this.handleHeaderCellClick,onCellClick:this.handleDetailMDTsClick,columnNameSortBy:a,sortingOrder:l,table:"mdts",filteredData:h,totalEntriesAmount:(0,P.default)(h),offset:c,setOffset:this.handleSetOffset,isBtnCreateVisible:u,onCreate:this.handleCreate,id:O,isLoading:p}))):null,"all"!==o&&!S||!n||d?null:j.default.createElement(R.Col,{xs:12,className:(0,V.default)({"col-panel-details":s})},j.default.createElement(ne.default,{onExpand:this.handleExpand,name:"mdtsDetail",openedPanel:i,expandedPanel:o,currentPanel:"mdtsDetail",detail:N,onEdit:this.handleEdit,editedPanel:m,onCancel:this.handleMDTsDetailCancel,onSaveSettings:this.handleSaveSettingsDetailForm,mdtFormValues:v.values,isSubmit:f})),"all"!==o&&!_||!d||n?null:j.default.createElement(R.Col,{xs:12,className:(0,V.default)({"col-panel-details":s})},j.default.createElement(G.default,{onExpand:this.handleExpand,name:ue,openedPanel:i,onShow:this.handleShow,expandedPanel:o,currentPanel:ue,onSaveSettings:this.handleSaveSettingsCreateForm,formValues:D.values,onCancel:this.handleCreateCancel,isCreatePanelVisible:d,componentForm:j.default.createElement(z.default,{isSubmit:f}),title:"Create MDT"})))))},t}(A.PureComponent),d.propTypes={allMDTs:y.default.arrayOf(y.default.object)},d.contextTypes={router:y.default.shape({history:y.default.object})},u=m))||u)||u)||u)||u)||u);t.default=ce},"./src/components/pages/MDTs/MDTsCreate/MDTsCreateForm.js":function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,n,r=a("./node_modules/babel-runtime/helpers/classCallCheck.js"),o=l(r),i=a("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),u=l(i),d=a("./node_modules/babel-runtime/helpers/inherits.js"),m=l(d),c=a("./node_modules/react/react.js"),f=l(c),p=a("./node_modules/redux-form/es/index.js"),E=a("./src/components/form-fields/ValidatedInputFormGroup.js"),T=l(E),N=a("./src/components/form-fields/ValidatedTextareaFormGroup.js"),v=l(N),D=a("./src/components/form-fields/DateInput.js"),S=l(D),M=a("./src/components/pages/MDTs/forms.validation.js"),_=a("./src/components/pages/MDTs/forms.config.js"),b=a("./src/components/pages/MDTs/MDTsCreate/default-values.config.js"),h=(s=(0,p.reduxForm)({form:"mdtsCreateFormSelector",validate:M.validateForm}))(n=function(e){function t(){return(0,o.default)(this,t),(0,u.default)(this,e.apply(this,arguments))}return(0,m.default)(t,e),t.prototype.componentDidMount=function(){this.props.initialize(b.defaultFormValues)},t.prototype.render=function(){var e=this.props.isSubmit;return f.default.createElement("div",{className:"panel-body-inner"},f.default.createElement("form",{name:"mdtCreateForm",className:"form"},f.default.createElement("div",{className:"form-group-wrapper"},f.default.createElement("div",{className:"row-expand"},f.default.createElement("div",{className:"col-expand-left"},f.default.createElement(p.Field,{label:_.valuesLabels.TEAM,name:_.valuesNames.TEAM,id:_.valuesNames.TEAM,type:"text",placeholder:"",component:T.default,props:{isSubmit:e}})),f.default.createElement("div",{className:"col-expand-right"},f.default.createElement(p.Field,{label:_.valuesLabels.DATE_OF_REQUEST,name:_.valuesNames.DATE_OF_REQUEST,id:_.valuesNames.DATE_OF_REQUEST,component:S.default,props:{format:"DD-MMM-YYYY",isSubmit:e}}))),f.default.createElement("div",{className:"row-expand"},f.default.createElement("div",{className:"col-expand-left"},f.default.createElement(p.Field,{label:_.valuesLabels.DATE_OF_MEETING,name:_.valuesNames.DATE_OF_MEETING,id:_.valuesNames.DATE_OF_MEETING,component:S.default,props:{format:"DD-MMM-YYYY",isSubmit:e}})),f.default.createElement("div",{className:"col-expand-right"},f.default.createElement(p.Field,{label:_.valuesLabels.LINK,name:_.valuesNames.LINK,id:_.valuesNames.LINK,type:"text",placeholder:"",component:T.default,props:{isSubmit:e}}))),f.default.createElement("div",{className:"row-expand"},f.default.createElement("div",{className:"col-expand-left"},f.default.createElement(p.Field,{label:_.valuesLabels.QUESTION,name:_.valuesNames.QUESTION,id:_.valuesNames.QUESTION,component:v.default,props:{isSubmit:e}})),f.default.createElement("div",{className:"col-expand-right"},f.default.createElement(p.Field,{label:_.valuesLabels.NOTES,name:_.valuesNames.NOTES,id:_.valuesNames.NOTES,component:v.default,props:{isSubmit:e}}))))))},t}(c.PureComponent))||n;t.default=h},"./src/components/pages/MDTs/MDTsCreate/default-values.config.js":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultFormValues=void 0;var l,s=a("./node_modules/babel-runtime/helpers/defineProperty.js"),n=function(e){return e&&e.__esModule?e:{default:e}}(s),r=a("./src/components/pages/MDTs/forms.config.js");t.defaultFormValues=(l={},(0,n.default)(l,r.valuesNames.AUTHOR,"bob.smith@gmail.com"),(0,n.default)(l,r.valuesNames.SOURCE,"openehr"),l)},"./src/components/pages/MDTs/MDTsDetail/MDTsDetail.js":function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=a("./node_modules/babel-runtime/helpers/classCallCheck.js"),n=l(s),r=a("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),o=l(r),i=a("./node_modules/babel-runtime/helpers/inherits.js"),u=l(i),d=a("./node_modules/react/react.js"),m=l(d),c=a("./src/components/plugin-page-component/PluginDetailPanel.js"),f=l(c),p=a("./src/components/pages/MDTs/MDTsDetail/MDTsDetailForm.js"),E=l(p),T=a("./src/utils/time-helpers.utils.js"),N=a("./src/components/pages/MDTs/forms.config.js"),v=function(e){function t(){return(0,n.default)(this,t),(0,o.default)(this,e.apply(this,arguments))}return(0,u.default)(t,e),t.prototype.render=function(){var e=this.props,t=e.onExpand,a=e.openedPanel,l=e.expandedPanel,s=e.currentPanel,n=e.onEdit,r=e.editedPanel,o=e.onCancel,i=e.onSaveSettings,u=e.mdtFormValues,d=e.isSubmit,c=this.props.detail;c=c||{};var p=(0,T.getDDMMMYYYY)(c[N.valuesNames.DATE_OF_REQUEST]),v=(0,T.getDDMMMYYYY)(c[N.valuesNames.DATE_OF_MEETING]);return m.default.createElement("div",{className:"section-detail"},m.default.createElement("div",{className:"panel-group accordion"},"mdtsPanel"!==l&&"all"!==l||r.mdtsPanel?null:m.default.createElement(f.default,{onExpand:t,name:"mdtsPanel",title:"MDT Meeting",isOpen:"mdtsPanel"===a,currentPanel:s,onEdit:n,editedPanel:r,onCancel:o,onSaveSettings:i,formValues:u,isBtnShowPanel:!1},m.default.createElement("div",{className:"panel-body-inner"},m.default.createElement("div",{className:"form"},m.default.createElement("div",{className:"form-group-wrapper"},m.default.createElement("div",{className:"row-expand"},m.default.createElement("div",{className:"col-expand-left"},m.default.createElement("div",{className:"form-group"},m.default.createElement("label",{className:"control-label"},N.valuesLabels.TEAM),m.default.createElement("div",{className:"form-control-static"},c[N.valuesNames.TEAM]?m.default.createElement("ul",{className:"list-reset"},m.default.createElement("li",null,c[N.valuesNames.TEAM])):m.default.createElement("span",null,N.valuesLabels.TEAM_NOT)))),m.default.createElement("div",{className:"col-expand-right"},m.default.createElement("div",{className:"form-group"},m.default.createElement("label",{className:"control-label"},N.valuesLabels.DATE_OF_REQUEST),m.default.createElement("div",{className:"form-control-static"},c[N.valuesNames.DATE_OF_REQUEST]?m.default.createElement("ul",{className:"list-reset"},m.default.createElement("li",null,p)):m.default.createElement("span",null,N.valuesLabels.DATE_OF_REQUEST_NOT))))),m.default.createElement("div",{className:"row-expand"},m.default.createElement("div",{className:"col-expand-left"},m.default.createElement("div",{className:"form-group"},m.default.createElement("label",{className:"control-label"},N.valuesLabels.DATE_OF_MEETING),c[N.valuesNames.DATE_OF_MEETING]?m.default.createElement("ul",{className:"list-reset"},m.default.createElement("li",null,v)):m.default.createElement("span",null,N.valuesLabels.DATE_OF_MEETING_NOT))),m.default.createElement("div",{className:"col-expand-right"},m.default.createElement("div",{className:"form-group"},m.default.createElement("label",{className:"control-label"},N.valuesLabels.LINK),m.default.createElement("div",{className:"form-control-static"},c[N.valuesNames.LINK]?m.default.createElement("a",{href:c[N.valuesNames.LINK]},c[N.valuesNames.LINK]):m.default.createElement("span",null,N.valuesLabels.LINK_NOT))))),m.default.createElement("div",{className:"row-expand"},m.default.createElement("div",{className:"col-expand-left"},m.default.createElement("div",{className:"form-group"},m.default.createElement("label",{className:"control-label"},N.valuesLabels.QUESTION),c[N.valuesNames.QUESTION]?m.default.createElement("ul",{className:"list-reset"},m.default.createElement("li",null,c[N.valuesNames.QUESTION])):m.default.createElement("span",null,N.valuesLabels.QUESTION_NOT))),m.default.createElement("div",{className:"col-expand-right"},m.default.createElement("div",{className:"form-group"},m.default.createElement("label",{className:"control-label"},N.valuesLabels.NOTES),c[N.valuesNames.NOTES]?m.default.createElement("ul",{className:"list-reset"},m.default.createElement("li",null,c[N.valuesNames.NOTES])):m.default.createElement("span",null,N.valuesLabels.NOTES_NOT)))),m.default.createElement("div",{className:"row-expand"},m.default.createElement("div",{className:"col-expand-left"},m.default.createElement("div",{className:"form-group"},m.default.createElement("label",{className:"control-label"},N.valuesLabels.SOURCE),m.default.createElement("div",{className:"form-control-static"},c[N.valuesNames.SOURCE])))))))),"mdtsPanel"!==l&&"all"!==l||!r.mdtsPanel?null:m.default.createElement(f.default,{onExpand:t,name:"mdtsPanel",title:"Edit MDT",isOpen:"mdtsPanel"===a,currentPanel:s,onEdit:n,editedPanel:r,onCancel:o,onSaveSettings:i,formValues:u,isBtnShowPanel:!1},m.default.createElement(E.default,{detail:c,isSubmit:d}))))},t}(d.PureComponent);t.default=v},"./src/components/pages/MDTs/MDTsDetail/MDTsDetailForm.js":function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,n,r=a("./node_modules/babel-runtime/helpers/defineProperty.js"),o=l(r),i=a("./node_modules/babel-runtime/helpers/classCallCheck.js"),u=l(i),d=a("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),m=l(d),c=a("./node_modules/babel-runtime/helpers/inherits.js"),f=l(c),p=a("./node_modules/react/react.js"),E=l(p),T=a("./node_modules/redux-form/es/index.js"),N=a("./src/components/form-fields/ValidatedInputFormGroup.js"),v=l(N),D=a("./src/components/form-fields/ValidatedTextareaFormGroup.js"),S=l(D),M=a("./src/components/form-fields/DateInput.js"),_=l(M),b=a("./src/components/pages/MDTs/forms.config.js"),h=a("./src/components/pages/MDTs/forms.validation.js"),O=(s=(0,T.reduxForm)({form:"mdtsPanelFormSelector",validate:h.validateForm}))(n=function(e){function t(){return(0,u.default)(this,t),(0,m.default)(this,e.apply(this,arguments))}return(0,f.default)(t,e),t.prototype.componentDidMount=function(){var e=this.props,t=e.detail;(0,e.initialize)(this.defaultValuesForm(t))},t.prototype.defaultValuesForm=function(e){var t;return t={},(0,o.default)(t,b.valuesNames.TEAM,e[b.valuesNames.TEAM]),(0,o.default)(t,b.valuesNames.LINK,e[b.valuesNames.LINK]),(0,o.default)(t,b.valuesNames.QUESTION,e[b.valuesNames.QUESTION]),(0,o.default)(t,b.valuesNames.NOTES,e[b.valuesNames.NOTES]),(0,o.default)(t,b.valuesNames.DATE_OF_REQUEST,e[b.valuesNames.DATE_OF_REQUEST]),(0,o.default)(t,b.valuesNames.DATE_OF_MEETING,e[b.valuesNames.DATE_OF_MEETING]),t},t.prototype.render=function(){var e=this.props.isSubmit;return E.default.createElement("div",{className:"panel-body-inner"},E.default.createElement("form",{name:"mdtsPanelForm",className:"form"},E.default.createElement("div",{className:"form-group-wrapper"},E.default.createElement("div",{className:"row-expand"},E.default.createElement("div",{className:"col-expand-left"},E.default.createElement(T.Field,{label:b.valuesLabels.TEAM,name:b.valuesNames.TEAM,id:b.valuesNames.TEAM,type:"text",placeholder:"",component:v.default,props:{isSubmit:e}})),E.default.createElement("div",{className:"col-expand-right"},E.default.createElement(T.Field,{label:b.valuesLabels.DATE_OF_REQUEST,name:b.valuesNames.DATE_OF_REQUEST,id:b.valuesNames.DATE_OF_REQUEST,component:_.default,props:{format:"DD-MMM-YYYY",isSubmit:e}}))),E.default.createElement("div",{className:"row-expand"},E.default.createElement("div",{className:"col-expand-left"},E.default.createElement(T.Field,{label:b.valuesLabels.DATE_OF_MEETING,name:b.valuesNames.DATE_OF_MEETING,id:b.valuesNames.DATE_OF_MEETING,component:_.default,props:{format:"DD-MMM-YYYY",isSubmit:e}})),E.default.createElement("div",{className:"col-expand-right"},E.default.createElement(T.Field,{label:b.valuesLabels.LINK,name:b.valuesNames.LINK,id:b.valuesNames.LINK,type:"text",placeholder:"",component:v.default,props:{isSubmit:e}}))),E.default.createElement("div",{className:"row-expand"},E.default.createElement("div",{className:"col-expand-left"},E.default.createElement(T.Field,{label:b.valuesLabels.QUESTION,name:b.valuesNames.QUESTION,id:b.valuesNames.QUESTION,component:S.default,props:{isSubmit:e}})),E.default.createElement("div",{className:"col-expand-right"},E.default.createElement(T.Field,{label:b.valuesLabels.NOTES,name:b.valuesNames.NOTES,id:b.valuesNames.NOTES,component:S.default,props:{isSubmit:e}}))))))},t}(p.PureComponent))||n;t.default=O},"./src/components/pages/MDTs/forms.config.js":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.valuesNames={TEAM:"serviceTeam",LINK:"servicePageLink",QUESTION:"question",NOTES:"notes",DATE_OF_REQUEST:"dateOfRequest",DATE_OF_MEETING:"dateOfMeeting",DATE_CREATED:"dateCreated",AUTHOR:"author",TIME_OF_MEETING:"timeOfMeeting",SOURCE:"source",SOURCE_ID:"sourceId"},t.valuesLabels={TEAM:"Service / Team",TEAM_NOT:"No Multidisciplinary Team",LINK:"Link to MDT Web Service Directory",LINK_NOT:"No Link",QUESTION:"Question For MDT",QUESTION_NOT:"No Question For MDT",NOTES:"Meeting Discussion",NOTES_NOT:"No Meeting Discussion",DATE_OF_REQUEST:"Date of Request",DATE_OF_REQUEST_NOT:"No MDT date",DATE_OF_MEETING:"Date of Meeting",DATE_OF_MEETING_NOT:"Not Available",DATE_CREATED:"Date",AUTHOR:"Author",SOURCE:"Source",SOURCE_ID:"Source ID"}},"./src/components/pages/MDTs/forms.validation.js":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.validateForm=void 0;var l=a("./src/components/pages/MDTs/forms.config.js"),s=function(e){var t={};return t[l.valuesNames.TEAM]=e[l.valuesNames.TEAM]?null:"You must enter a value.",t[l.valuesNames.QUESTION]=e[l.valuesNames.QUESTION]?null:"You must enter a value.",t[l.valuesNames.NOTES]=e[l.valuesNames.NOTES]?null:"You must enter a value.",t[l.valuesNames.DATE_OF_REQUEST]=e[l.valuesNames.DATE_OF_REQUEST]?null:"You must enter a value.",t[l.valuesNames.DATE_OF_MEETING]=e[l.valuesNames.DATE_OF_MEETING]?null:"You must enter a value.",t};t.validateForm=s},"./src/components/pages/MDTs/selectors.js":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mdtCreateFormStateSelector=t.mdtPanelFormSelector=t.patientMDTsDetailSelector=t.patientMDTsSelector=void 0;var l=a("./node_modules/lodash/fp/getOr.js"),s=function(e){return e&&e.__esModule?e:{default:e}}(l),n=a("./node_modules/reselect/lib/index.js"),r=a("./src/utils/plugin-helpers.utils.js"),o=a("./src/components/pages/MDTs/forms.config.js"),i=(0,s.default)({},"form.mdtsPanelFormSelector"),u=(0,s.default)({},"form.mdtsCreateFormSelector"),d=(0,n.createSelector)(function(e){return e.patientsMDTs},function(e,t){return(0,s.default)(null,"match.params.userId",t)},function(e,t){var a=r.operationsOnCollection.modificateDateForTable(e[t],o.valuesNames.DATE_OF_REQUEST);return a=r.operationsOnCollection.modificateDateForTable(a,o.valuesNames.DATE_OF_MEETING),{allMDTs:a,userId:t}}),m=(0,n.createSelector)(function(e){return e.mdtsDetail},function(e,t){return(0,s.default)(null,"match.params.userId",t)},function(e,t){return{mdtDetail:e[t],userId:t}}),c=(0,n.createSelector)(i,function(e){return{mdtFormState:e}}),f=(0,n.createSelector)(u,function(e){return{mdtCreateFormState:e}});t.patientMDTsSelector=d,t.patientMDTsDetailSelector=m,t.mdtPanelFormSelector=c,t.mdtCreateFormStateSelector=f},"./src/components/pages/MDTs/table-columns.config.js":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultColumnsSelected=t.columnsConfig=void 0;var l=a("./src/utils/time-helpers.utils.js");t.columnsConfig=[{key:"dateOfRequest",title:"Date of Request",width:"25%",transformer:l.getDDMMMYYYY},{key:"serviceTeam",title:"Service / Team",width:"28%"},{key:"dateOfMeeting",title:"Date of Meeting",width:"28%",transformer:l.getDDMMMYYYY},{key:"source",title:"Source",width:"19%"},{key:"sourceId",title:"sourceId",width:0,display:"none"}],t.defaultColumnsSelected={dateOfRequest:!0,serviceTeam:!0,dateOfMeeting:!0,source:!0,sourceId:!0}}});