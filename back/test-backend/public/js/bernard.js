var param2 = {
     
      url: "http://localhost:3000/bernardapp/getCartDummyData",
      method: 'post',                     //请求方式（*）  
        toolbar: $("#toolbar"),                   //工具按钮用哪个容器  
        striped: true,                      //是否显示行间隔色  
        cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）  
        pagination: true,                   //是否显示分页（*）  
        sortable: false,                    //是否启用排序  
//        sortOrder: "asc",        //传递参数（*），这里应该返回一个object，即形如{param1:val1,param2:val2}  
        sidePagination: "server",           //分页方式：client客户端分页，server服务端分页（*）  
        pageNumber:1,                       //初始化加载第一页，默认第一页  
        pageSize: 5,                       //每页的记录行数（*）  
        pageList: [5, 10, 20],
         queryParamsType: "",
        queryParams: {
          aa: $("#sparePart").val()
        },          //可供选择的每页的行数（*） 
        search: true,
        showExport: true,  //是否显示导出按钮  
        buttonsAlign:"right",
        Icons:'glyphicon-export',  
        showColumns: true, //是否显示所有的列
        showRefresh: true, //是否显示刷新按钮
        clickToSelect: true, //是否启用点击选中行
        showToggle: true, //是否显示详细视图和列表视图的切换按钮
        cardView: false, //是否显示详细视图
        detailView: false, //是否显示父子表
        rowStyle: function (row, index) {
            var style = {};
            if(index%2!=0){
              style={css:{'background':'#87c1f34f'}};  
            }        
            return style;
        },
    columns: [{
            field: 'id',
            title: 'ID'
        }, {
            field: 'name',
            title: '东昌物流号'
        }, {
            field: 'price',
            title: '中英文描述'
        },{
            title: '操作',
            field: 'id',
            // align: 'center',
            // formatter:function(value,row,index){  
            //      //var e = '<a href="#" mce_href="#" onclick="edit(\''+ row.id + '\')">编辑</a> ';  
            //      var d = '<a href="#" mce_href="#" onclick="del(\''+ row.id +'\')">DEL</a> ';  
            //      console.log(value);
            //      //var g = '<a href="main.html" mce_href="#" target="_blank" onclick="detail(\''+ row.id +'\')">进入详情 </a> ';  
            //      return d;  
            // } 
        },{
            field: 'id',
            title: 'ID'
        }, {
            field: 'name东昌物流号东昌物流号东昌物流号东昌物流号',
            title: '东昌物流号东昌物流号'
        }, {
            field: 'price',
            title: '中英文描述东昌物流号东昌物流号'
        },{
            title: '操作东昌物流号东昌物流号',
            field: 'id',
            // align: 'center',
            // formatter:function(value,row,index){  
            //      //var e = '<a href="#" mce_href="#" onclick="edit(\''+ row.id + '\')">编辑</a> ';  
            //      var d = '<a href="#" mce_href="#" onclick="del(\''+ row.id +'\')">DEL</a> ';  
            //      console.log(value);
            //      //var g = '<a href="main.html" mce_href="#" target="_blank" onclick="detail(\''+ row.id +'\')">进入详情 </a> ';  
            //      return d;  
            // } 
        },{
            field: 'id',
            title: 'ID'
        }, {
            field: 'name',
            title: '东昌物流号东昌物流号东昌物流号'
        }, {
            field: 'price',
            title: '中英文描述东昌物流号东昌物流号东昌物流号'
        },{
            title: '操作东昌物流号东昌物流号',
            field: 'id',
            // align: 'center',
            // formatter:function(value,row,index){  
            //      //var e = '<a href="#" mce_href="#" onclick="edit(\''+ row.id + '\')">编辑</a> ';  
            //      var d = '<a href="#" mce_href="#" onclick="del(\''+ row.id +'\')">DEL</a> ';  
            //      console.log(value);
            //      //var g = '<a href="main.html" mce_href="#" target="_blank" onclick="detail(\''+ row.id +'\')">进入详情 </a> ';  
            //      return d;  
            // } 
        } ]
  
  };

   // $.ajax({  
   //        method: "POST",  
   //        url:"http://localhost:3000/bernardapp/",
   //        async: false,  
   //        dataType: "text",
   //        data: JSON.stringify({ url: "component1"}),
   //        contentType: "application/json; charset=utf-8",  
   //        success: function (res) {
   //          $("#t1").html(res)
            
   //        }
   //    });

   

  var param = {
    el: "#page",
    data: {
      sparePart: ""
    },
    methods: {
      search: function(e){
        console.log(param.data.sparePart)
        
      }
    }
  }

  new Vue(param)

  // var aa = { template: `
  //   <div>
  //     aaaaaaaaa
  //   </div>
  // `}
  // const bb = { template: $("#t1").html()}

  // const routes = [
  //     {path: '/aa', component: aa},
  //     {path: '/bb', component: bb}
  // ]

  // const router = new VueRouter({
  //   routes: routes
  // })

  // // const app = new Vue({
  // //   router
  // // }).$mount("#app")

  // new Vue({
  //   el: "#app",
  //   data: {
  //     strTemplate1: ""
  //   },
  //   router: router
  // })

$(function() {
	// getCart();
	// $("#btnSearch").click(search);
	// $('table').bootstrapTable({
	//     columns: [{
	// 	        field: 'id',
	// 	        title: 'ID'
	// 	    }, {
	// 	        field: 'name',
	// 	        title: '东昌物流号'
	// 	    }, {
	// 	        field: 'price',
	// 	        title: '中英文描述'
	// 	    }],
	// 	    data: [{
	// 	        id: 1,
	// 	        name: 'DC33434434',
	// 	        price: '切削液fdasdsfdsaf'
	// 	    }, {
	// 	        id: 2,
	// 	        name: 'DC343434',
	// 	        price: '切削液fdasdsfdsaf'
	// 	    }]
	// });
 


	url = "http://localhost:3000/bernardapp/getCartDummyData"
	$("#tbl").bootstrapTable(param2);

	$("#tbl thead tr").css("background-color", "#428bca").css("color", "#fff");
	// $(".fixed-table-body").css("height", "200px");
	// $(".keep-open .btn").css("height", "32px");
	$("#btn_export").bind("click", exportToFile);

  // $.ajax({  
  //     method: "POST",  
  //     url:"http://localhost:3000/bernardapp/",  
  //     dataType: "text",
  //     data: JSON.stringify({ url: "test2"}),
  //     contentType: "application/json; charset=utf-8",  
  //     success: function (res) {
  //       console.log(res);
  //       document.write(res)
  //     }
  // });
	
});

var search = search => {
	console.log("search");
	url = "http://localhost:3000/bernardapp/getCartDummyData";
	// $.ajax({  
 //      method: "POST",  
 //      url: url,  
 //      dataType: "json",
 //      data: JSON.stringify({ aa: $("#sparePart").val()}),
 //      contentType: "application/json; charset=utf-8",  
 //      success: function (res) {
 //        console.log(res);
 //        $("#tbl").bootstrapTable('refresh', res);
 //      }
	// });
  let aa = $("#sparePart").val()
  $("#tbl").bootstrapTable('destroy').bootstrapTable(param2);
  $("#tbl").bootstrapTable('refresh');
}

function exportToFile(){
	$("thead").css("color", "#000");
	$("#tbl").tableExport({ headings: true, 
	    footers: true, bootstrap: false,  escape:'false', type:'excel',
        excelstyles: ['background-color', 'color',
            'font-family', 'font-size', 'font-weight',
            'text-align']});
	$("thead").css("color", "#fff");
}

var del = (rowId) => {
	alert(rowId);
}

var getCart = getCart => {
	alert($("#sparePart").val());
	$.ajax({  
      method: "POST",  
      url:"http://localhost:3000/bernardapp/getCart",  
      dataType: "json",
      data: JSON.stringify({ sql: "select * from cart where id < 5"}),
      contentType: "application/json; charset=utf-8",  
      success: function (res) {
        console.log(res);
        let data = res.data;
        let strRes = "";
        for(var i = 0; i < data.length; i++) {
        	let cart = data[i];

        }
        $("#cartTableBody").html(strRes);
      }
	});
}

var btnClick = btnClick => {
	$("#cartInfo").css("background-color", "red");
}