// 商品模块
export default {
  /**
   * 商品Commodity
   */
  backCategoryLinkAttrAndGroup: '/commodity/baseCategorys/getCategoryAllProperty', // 查询类目下的属性（按照基础属性、销售属性以及属性组进行分组）
  backCategoryLinkAttrParent: '/commodity/baseCategorys/{api}/parentPropertys',
  backCategoryLinkAttr: '/commodity/baseCategorys/{api}/propertys',
  checkBrand: '/commodity/brands/chenkBeforeDeleting/{api}',
  // getProductListByCode: '/commodity/products/productList', // 根据型号编码查询对应型号下的sku列表
  getProductPageByCode: '/commodity/products/productPage', // 分页查询mongoDB中产品列表
  getProductListByCode: '/commodity/products/productList', // 查询mongoDB中产品列表
  getGroupCommodity: '/commodity/goods/combination/page', // 组合商品列表
  skuCheckExist: '/commodity/goods/sku/check/exist', // 校验SKU是否已存在
  goodsStatusChange: '/commodity/goods/changeEnable', // 型号状态变更
  productLineListAll: '/commodity/productlines/list',
  comFromCommodity: '/commodity/goods/status/{api}',
  getCategoryOneData: '/commodity/categorys/{api}',
  productLineList: '/commodity/productlines/page',
  detailFromCommodity: '/commodity/goods/{api}',
  updateFromCommodity: '/commodity/goods/{api}',
  checkGoods: '/commodity/goods/changeStatus', // 型号审核状态变更
  getSkuWordPage: '/commodity/products/page', // 价目根据关键字搜索sku分页列表
  getAllSkuPage: '/commodity/products/page', // 所有sku数据
  getAllSkuList: '/commodity/products/list', // 所有sku数据--新的
  backCategoryTree: '/commodity/categorys',
  getSkuByKey: '/commodity/products/list', // 根据搜索值查询
  getCommodity: '/commodity/goods/page', // 商品列表
  detailBrand: '/commodity/brands/{api}', // 品牌详情
  updateBrand: '/commodity/brands/{api}', // 品牌更新
  removeBrand: '/commodity/brands/{api}',
  addFromCommodity: '/commodity/goods', // 新增商品
  getBrandList: '/commodity/brands', // 品牌列表
  addBrand: '/commodity/brands', // 新增品牌
  getSkuList: '/commodity/sku', // sku列表
  // 产品管理
  statusProducts: '/commodity/products/updateStatus', // (PUT)根据skuCode更新产品状态
  pageProduct: '/commodity/products/productPage', // (GET)分页查询mongoDB中产品列表
  detailProducts: '/commodity/products/{api}', // (GET)根据skuCode查询产品详情
  updateProducts: '/commodity/products/{api}', // (PUT)根据skuCode更新产品信息
  listProducts: '/commodity/products/list', // (GET)查询产品列表
  pageProducts: '/commodity/products/page', // (GET)分页查询产品列表
  addProduct: '/commodity/products/insert', // 新增产品数据
  // 价格表
  changeList: '/commodity/priceList/change/search/page', //调整单列表
  priceList: '/commodity/priceList/search/page', // 价格表列表
  // 价格调整单
  priceAdjustStatusChange: '/commodity/price/change/updateStatus', // 价格调整单修改状态get
  priceAdjustCheckReject: '/commodity/priceList/change/reject', // 价格表审核驳回put
  priceAdjustTakeCheck: '/commodity/priceList/change/submit', // 价格表提交审核put
  priceAdjustCheckPass: '/commodity/priceList/change/audit', // 价格表审核通过put
  priceAdjustCheckBack: '/commodity/priceList/change/undo', // 价格表审核退回put
  getSingleAdjustInfo: '/commodity/priceList/change/{api}', // 查询单条调整单信息get
  priceAdjustUpdate: '/commodity/priceList/change/{api}', // 价格调整单编辑put
  priceAdjustAdd: '/commodity/priceList/change', // 价格调整单新增post
  // 价格明细
  priceHistoriesDetail: '/commodity/priceList/change/histories/detail', // 调价记录明细
  priceDetail: '/commodity/priceList/detail/search/page', // 分页搜索价格明细
  priceLinkSku: '/commodity/priceList/{api}', // 查询当前价目关联SKU信息
  // 交易链路价格
  tsLinkEndCorporateList: '/price/ts/link/getTsLinkEndCorporateList', // 查询末级节点法人信息列表
  tsLinkDetail: '/commodity/priceList/tsLink/detail/list', // 交易链路价格明细
  tsLinkProductLine: '/price/ts/link/getTsLinkProductLine', // 产品线列表
  tsLinkProduct: '/price/ts/link/getTsLinkProduct', // 产品列表
  tsLinkGetPage: '/price/ts/link/getPage' // 分页获取交易链路
}
