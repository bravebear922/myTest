const constant = require('../conf/const')

module.exports = () => {
	return async(ctx, next) => {
		console.log("bernard-http-error middleware")
		try{
			// await next()必须放在try里面 不然就不会捕获到其他的异常
			await next();
			// 这边404的错误一定要手动获取 并且throw这个异常 然后使用catch中统一来处理这些error
			// 原因在于404错误需要手动获取 而这个中间件的作用还有用来处理其他的后台异常 比如500错误
			// 因此基于洋葱模型的概念 这个中间件在app.js中app.use的使用放在最上面 这样这个中间件的await next()会最后被执行 
			// 因此catch中就可以捕获到其他所有中间件或者后台代码中的所有异常和错误
			if(ctx.response.status == 404){
				throw ctx.response
			}
		}catch(e){
			console.log(e)
			// 404 error
			// 500 internal server error
			let status = e.status
			switch(status){
				case 404:
					await ctx.render('error', {
					    message: constant.PAGE_NOT_FOUND,
					    error: {
					      status: status,
					      stack: ""
					    }
					  })
					break;
				case 500:
					await ctx.render('error', {
					    message: constant.INTERNAL_SERVER_ERR,
					    error: {
					      status: status,
					      stack: ""
					    }
					  })
					break;
			}

		}
		
		
	}
}