export const constantRoute = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
    meta:{
      title:'Login',
      hidden:true,
      icon:'Promotion'
    }
  },
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout',
    meta:{
      title:'Layout',
      hidden:false,
      icon:'Avatar'
    },
    redirect:'/home',
    children:[
      {
        path:'/home',
        component:()=> import ('@/views/home/index.vue'),
        meta:{
          title:'Home',
          hidden:false,
          icon:'HomeFilled'
        },
      }
    ]
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
    meta:{
      title:'404',
      hidden:true,
      icon:'DocumentDelete'
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'any',
    meta:{
      title:'Any Router',
      hidden:true,
      icon:'DataLine'
    },
  },
  {
    path:'/screen',
    component:()=>import('@/views/screen/index.vue'),
    name:'Screen',
    meta:{
      hidden:false,
      title: "Data Screen",
      icon:'Platform'
    }
  },
  {
    path:'/acl',
    component:()=>import('@/layout/index.vue'),
    name:'Acl',
    meta:{
      title:'Role Management',
      hidden: false,
      icon:'Lock'
    },
    children:[
      {
        path:'/acl/user',
        component:()=>import("@/views/acl/user/index.vue"),
        name:'User',
        meta:{
          title:'User Management',
          hidden: false,
          icon:'User'
        }
      },
      {
        path:'/acl/role',
        component:()=>import("@/views/acl/role/index.vue"),
        name:'Role',
        meta:{
          title:'Role Management',
          hidden: false,
          icon:'UserFilled'
        }
      },
      {
        path:'/acl/permission',
        component:()=>import("@/views/acl/permission/index.vue"),
        name:'Permission',
        meta:{
          title:'Menu Management',
          hidden: false,
          icon:'Monitor'
        }
      },
    ]
  },
  {
    path:'/product',
    component:()=>import("@/layout/index.vue"),
    name:'Product',
    meta:{
      title:'Product',
      hidden:false,
      icon:'Goods'
    },
    children:[
      {
        path:'/product/trademark',
        component:()=>import("@/views/product/trademark/index.vue"),
        name:'Trademark',
        meta:{
          title:'Trademark Management',
          hidden:false,
          icon:'ShoppingCartFull'
        },
      },
      {
        path:'/product/attr',
        component:()=>import("@/views/product/attr/index.vue"),
        name:'Attr',
        meta:{
          title:'Attribute Management',
          hidden:false,
          icon:'ChromeFilled'
        },
      },
      {
        path:'/product/spu',
        component:()=>import("@/views/product/spu/index.vue"),
        name:'Spu',
        meta:{
          title:'SPU Management',
          hidden:false,
          icon:'Calendar'
        },
      },
      {
        path:'/product/sku',
        component:()=>import("@/views/product/sku/index.vue"),
        name:'Sku',
        meta:{
          title:'SKU Management',
          hidden:false,
          icon:'Orange'
        },
      },
    ]
  }
]
