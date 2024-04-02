"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[1331],{1838:function(a,e,t){t.r(e),t.d(e,{Title:function(){return r},_frontmatter:function(){return c},default:function(){return b}});var o=t(3366),n=(t(7294),t(4983)),i=t(4295),s=["components"],r=function(){return(0,n.kt)("span",null,"FinOps 4 - Optimizing storage resources ",(0,n.kt)("br",null))},c={},l={Title:r,_frontmatter:c},p=i.Z;function b(a){var e=a.components,t=(0,o.Z)(a,s);return(0,n.kt)(p,Object.assign({},l,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",null,"Get a global view of storage consumption"),(0,n.kt)("p",null,"There are three forms of cloud storage: object storage, file storage, and block storage. The bank’s cost optimization effort focuses on block storage, which functions like an external disk to the compute instance and provides low-latency state management for cloud workloads."),(0,n.kt)("p",null,"At a general level, there are two types of block storage: solid state drives (SSDs) and hard disk drives (HDDs). SSDs are good for low-latency, heavy IOPS types of workloads, whereas HDDs are good for high throughput sequential workloads."),(0,n.kt)("p",null,"It is important for the bank to choose a storage service based on the workload characteristics at hand. Some of the most common ways companies overspend on storage are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Unused volumes: Compute instances are stopped, but the storage volumes are forgotten. This results in orphaned volumes, which then results in residual and accumulating costs."),(0,n.kt)("li",{parentName:"ul"},"Overprovisioning: Storage services are grossly oversized. For most cloud resources, you pay for what you provision, not for what you use."),(0,n.kt)("li",{parentName:"ul"},"Mismatched storage type: The storage choices are not appropriate for the requirements of the specific workload. For example, transaction processing is often best done on fast SSDs, whereas sequential workloads — like logging — are more compatible with cost-effective HDDs. This can result in either suboptimal performance or cost overruns.")),(0,n.kt)("p",null,"Let’s start exploring the storage optimization opportunities in this environment."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Point out the Volume entity, as highlighted in the screenshot and narration below.")),(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"49.30555555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAABmUlEQVQoz21Sy27bMBDU/59z6rE/EKCHnnsLUMAtGuTQAEnrwDFoWyRNU3xJfEyxa0k1ig6wILEiZ4az6mqtcN7hdD6h1ydIK5FCgL0YjOMIQmuN11IK95yxCDHiX+Sc0dFmcAMO+gChBJTv4UPG5+9HbLYBcWrECBLOpQAVeD7vcb9/xIPes0iMETFFFlsJU0jQg0bICj/FhE+bI552Dk/7BGPOUEqtrj6+P+LL7hl3r19hvIEQAn3fM3mHBgzDgJIblFXQQZMh/HgfucZ8dUjPpguEF6fx4fcG34wAysQOnXNXhyZZnLTA+XKE1AJ6EEgxITiLFD1aLUzkvYeUcs11QbvJj4g7Kd9w7Hcwlx7OXxCSRUojE9Ahyo4qpfS3R5nO1eY158LnOt9vYdQBPkRWuMVCdjvpZU/OuRqdocEEjoYz9N7h1+GVXSwXiKjNDji/2vj7NCaOoJYRNS9F/YBa598ml4w3uV3d/A/01ClPnBqLzPm1mxwJHakRoY32qlwrT11rzQNYwrbW8lBCCHyO+qUsVdah/AE/KggtvaSeeAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab4",title:"Lab4",src:"/Turbonomic-2Day-Partner-Workshop/static/3bead91892923835faaf46170c074cb5/3cbba/FinOps14.png",srcSet:["/Turbonomic-2Day-Partner-Workshop/static/3bead91892923835faaf46170c074cb5/7fc1e/FinOps14.png 288w","/Turbonomic-2Day-Partner-Workshop/static/3bead91892923835faaf46170c074cb5/a5df1/FinOps14.png 576w","/Turbonomic-2Day-Partner-Workshop/static/3bead91892923835faaf46170c074cb5/3cbba/FinOps14.png 1152w","/Turbonomic-2Day-Partner-Workshop/static/3bead91892923835faaf46170c074cb5/0b124/FinOps14.png 1728w","/Turbonomic-2Day-Partner-Workshop/static/3bead91892923835faaf46170c074cb5/4ea69/FinOps14.png 2304w","/Turbonomic-2Day-Partner-Workshop/static/3bead91892923835faaf46170c074cb5/5d4f9/FinOps14.png 3250w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)("p",null,"By looking at the ‘Volume’ entity in the global supply chain, we see there are about 1,000 storage volumes in this environment. Notice the color coding in the donuts: “green” means healthy, “yellow” represents efficiency recommendations (i.e., cost savings), and “red” represents performance recommendations (i.e., impact to the end user experience). Based on the proportion of green vs. yellow vs. red, the bank can see there are significant opportunities to improve the cost efficiency and performance of storage."),(0,n.kt)("p",null,"Let’s drill down to better understand these cost reduction opportunities."),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Click the Volume entity, which will take you to the Storage Summary dashboard. ",(0,n.kt)("strong",{parentName:"li"},"(May also appear as “Volume Summary”)"))),(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"49.30555555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAABmUlEQVQoz21Sy27bMBDU/59z6rE/EKCHnnsLUMAtGuTQAEnrwDFoWyRNU3xJfEyxa0k1ig6wILEiZ4az6mqtcN7hdD6h1ydIK5FCgL0YjOMIQmuN11IK95yxCDHiX+Sc0dFmcAMO+gChBJTv4UPG5+9HbLYBcWrECBLOpQAVeD7vcb9/xIPes0iMETFFFlsJU0jQg0bICj/FhE+bI552Dk/7BGPOUEqtrj6+P+LL7hl3r19hvIEQAn3fM3mHBgzDgJIblFXQQZMh/HgfucZ8dUjPpguEF6fx4fcG34wAysQOnXNXhyZZnLTA+XKE1AJ6EEgxITiLFD1aLUzkvYeUcs11QbvJj4g7Kd9w7Hcwlx7OXxCSRUojE9Ahyo4qpfS3R5nO1eY158LnOt9vYdQBPkRWuMVCdjvpZU/OuRqdocEEjoYz9N7h1+GVXSwXiKjNDji/2vj7NCaOoJYRNS9F/YBa598ml4w3uV3d/A/01ClPnBqLzPm1mxwJHakRoY32qlwrT11rzQNYwrbW8lBCCHyO+qUsVdah/AE/KggtvaSeeAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab4",title:"Lab4",src:"/Turbonomic-2Day-Partner-Workshop/static/3bead91892923835faaf46170c074cb5/3cbba/FinOps14.png",srcSet:["/Turbonomic-2Day-Partner-Workshop/static/3bead91892923835faaf46170c074cb5/7fc1e/FinOps14.png 288w","/Turbonomic-2Day-Partner-Workshop/static/3bead91892923835faaf46170c074cb5/a5df1/FinOps14.png 576w","/Turbonomic-2Day-Partner-Workshop/static/3bead91892923835faaf46170c074cb5/3cbba/FinOps14.png 1152w","/Turbonomic-2Day-Partner-Workshop/static/3bead91892923835faaf46170c074cb5/0b124/FinOps14.png 1728w","/Turbonomic-2Day-Partner-Workshop/static/3bead91892923835faaf46170c074cb5/4ea69/FinOps14.png 2304w","/Turbonomic-2Day-Partner-Workshop/static/3bead91892923835faaf46170c074cb5/5d4f9/FinOps14.png 3250w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Point out the details on the Storage Summary dashboard, as highlighted in the screenshot and narration below.")),(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"63.888888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAABYlAAAWJQFJUiTwAAACPklEQVQ4y32TSW8TQRCF5xdzAwlENg6co5y4IcQBTpwQCghxAHIB7CgLcULs8RJnxp6lZ+mepd3j+ZDHWSVDSU9V6lI/db16bWV5TqoUMsuQSlFqzSLqVajrlViEMYa8yLHc0YDTg33szm+Oj48Y2V10EkFZQGVAl8t6pm8ur4rZbIZUEise2HjDAcLugUwI/3Rwun8wscDYZ0zOT3H7PfzOEVQVKs9xXJep53HpOOR5fo/YiofnzLMAFigE5ahLMhyQjgbo02MCu4ff72N65zCfU2uNFAGmXBLN5/OlRFfjW74TYx8KnF7BuF/hhhnTLMSVgtQo0BEq8zmRHnFVMSwM3bTE9iXTRN2QXWer2zG83Ml5/ULxajvlzd4l79Jz3k67HKkecMGh6vDA/speELDTc3l+4LD95YT37bPlK+8SXs+uMoVIPCIREIcRwg9IU0lclISBYKZyVCoplbraOTdu4C5hPdNgSgqVEAcBWRKhkogsjcnTGBmFqFhQGw11BXPTbL8uc2qVLnW9Im0I5dE+F7sfCL9/Q++3KdutJfZbt3W7RdH6dYufPzB9G4RPLZP7hOrzJ8aPnzDefMZobYPh2voST9e5WN9kvLnV5NH6RtMfbWzRf/iIaPdj489aBPdMbyE8iEOyqYPwXBJvggw9oomDEgHonEwEhO4YFfpNHXsuqTehDqaQZ7d6NhoufsLisMhXIKNuev/olwVJHBOGIVrrxpOWNoaZqVjkVfhvr6qIogjf95BSUpYlfwEuJ9OEbigH7QAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab4",title:"Lab4",src:"/Turbonomic-2Day-Partner-Workshop/static/3c2b9869da7d51066b6cab8eebf8acc6/3cbba/FinOps15.png",srcSet:["/Turbonomic-2Day-Partner-Workshop/static/3c2b9869da7d51066b6cab8eebf8acc6/7fc1e/FinOps15.png 288w","/Turbonomic-2Day-Partner-Workshop/static/3c2b9869da7d51066b6cab8eebf8acc6/a5df1/FinOps15.png 576w","/Turbonomic-2Day-Partner-Workshop/static/3c2b9869da7d51066b6cab8eebf8acc6/3cbba/FinOps15.png 1152w","/Turbonomic-2Day-Partner-Workshop/static/3c2b9869da7d51066b6cab8eebf8acc6/89bd2/FinOps15.png 1334w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)("p",null,"The ‘Storage Summary’ dashboard shows the number of volumes (1), total monthly cost of these volumes (2), and potential monthly savings that can be realized (3). The ‘Unattached Storage’ bar (4) shows that about 7-8% of storage is currently unattached."),(0,n.kt)("p",null,"Let’s take a deeper look at the specific volumes that can be reclaimed."),(0,n.kt)("h2",null,"Reclaim waste"),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"On the Potential Savings dashboard, click SHOW ALL.")),(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"48.958333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAABfUlEQVQoz42Sy04UQRSG+51YuvEB3Lpzzwu4YeHlEQwhhAULWbnQjcbLwg2XhBACQWDYoLFnqJ4ZpqUvE6Co+0e6oHGIRudP/qo6VX/9OTnnJFVVcVacUdc1RVlgvcMGj/eeEMJUbKCUQkpJIjJBmqak3ZTspyCMJS38rfhf+MPQWot1DhzsjTvMHb7n2dEapZF3ptNm2SAJ3ARfynVenMyzMtjmye4HZlaXydUl02DSOGkuKjvmeXeeXJWgbkSz+5952vkaz4W+QmqNVgpjDFrruDeczO7O8Fh2eTVYwSvLbmcfV4x50z/i8fa7KPwhR/TyPpnIGOUjhBCRWT/DWHMvy2hog+Nlb4GN6iA+amt4sPGaxXQnxsZbnHex8w2dc5HeOUKYmAbvSXzw8dN32ePh5hKPtt4ys7bM7LdPv7sYmK6WTVOatTWtjebj8Ji9evjXgt9jMwHlLy5El8thHzsUhItzklbQmrZwwf93TNxowKk4Ic9zrvJTfF1yDfaP+8pNYLjLAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab4",title:"Lab4",src:"/Turbonomic-2Day-Partner-Workshop/static/6305e7b23e2be36cf4ef6d93142a401b/3cbba/FinOps16.png",srcSet:["/Turbonomic-2Day-Partner-Workshop/static/6305e7b23e2be36cf4ef6d93142a401b/7fc1e/FinOps16.png 288w","/Turbonomic-2Day-Partner-Workshop/static/6305e7b23e2be36cf4ef6d93142a401b/a5df1/FinOps16.png 576w","/Turbonomic-2Day-Partner-Workshop/static/6305e7b23e2be36cf4ef6d93142a401b/3cbba/FinOps16.png 1152w","/Turbonomic-2Day-Partner-Workshop/static/6305e7b23e2be36cf4ef6d93142a401b/ce6f1/FinOps16.png 1328w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Select the AZURE tab (1). Under the DELETE section of the left navigation bar, click Volumes (2).")),(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"49.30555555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAABg0lEQVQoz4WT227jMAxE/f8/WTQpmsSJbV1J6jpdMsg2bxUwICHIRzOSvBBlpJxATJitYlYB5oSOOeefeh/52LBswYGaIFbGdr/gcT2hMIO6oI/+J6y1BjXVxkB43LHczh841gvS/jCQMKP1hjrq78d41jGG6dVb7QOlFJTWcNyuWLbLGcftG3FbEUJEloJEDCJCrRVSBCkl1FbBzOj96VqrJnDsbT4RYbt8Y5HZIKOCe0EmAUsDSTWI7VyK9RrtBbO4c6KNjkM8Si1gEdzOJyxUGSoujJAIIQsiFfgQbGeV996A6vI9dhsND94hwog5Y/16AZuAK8OFDJcEPgmO47DYCtz33YAveIwRczyB17yCmRBSwu38+eawskXWuCwVmeh/5JyzxVXoS+awd3gJtkYjr19nLKzuzKHAR7K4gQoO58yRLnbOGZCFse0bRMSejF7KnbfnxeWM6+kTS6AIVdQa9ZHreZCdoTrT2D54g2jvvLO+1WY/xOof2I8dzntc/13KDwkdCiS7APMxAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab4",title:"Lab4",src:"/Turbonomic-2Day-Partner-Workshop/static/17d636f36f092f77b36b44c2c1b0f1cb/3cbba/FinOps17.png",srcSet:["/Turbonomic-2Day-Partner-Workshop/static/17d636f36f092f77b36b44c2c1b0f1cb/7fc1e/FinOps17.png 288w","/Turbonomic-2Day-Partner-Workshop/static/17d636f36f092f77b36b44c2c1b0f1cb/a5df1/FinOps17.png 576w","/Turbonomic-2Day-Partner-Workshop/static/17d636f36f092f77b36b44c2c1b0f1cb/3cbba/FinOps17.png 1152w","/Turbonomic-2Day-Partner-Workshop/static/17d636f36f092f77b36b44c2c1b0f1cb/0b124/FinOps17.png 1728w","/Turbonomic-2Day-Partner-Workshop/static/17d636f36f092f77b36b44c2c1b0f1cb/4ea69/FinOps17.png 2304w","/Turbonomic-2Day-Partner-Workshop/static/17d636f36f092f77b36b44c2c1b0f1cb/65c63/FinOps17.png 3262w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)("p",null,"The dashboard identifies the bank’s storage volumes that are unattached, including the number of days they have gone unused. On cloud, the lifecycles of the storage volumes are not intentionally associated with the lifecycles of the compute instances. Volumes that are unattached for many days are good candidates to reclaim and gain some savings. The data for each cloud provider appears on a separate tab. This dashboard displays the bank’s potential savings from Azure, assuming they take all the recommended actions."),(0,n.kt)("p",null,"Turbonomic eliminates the need to hop between various cloud provider consoles. For example, we could also conveniently analyze storage usage in AWS or GCP by simply clicking the appropriate tab."),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"Select the AWS tab (1). Under the DELETE section of the left navigation bar, click Volumes (2).")),(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"48.611111111111114%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAABkklEQVQoz4WSy47bMAxF/f/f1VVX3RSzKIrpoE2TjGPZlkVSD1unkJIURTdD4EIWZB9d8npQFYIIJgGSUY+DXhVqrR/q3zqOg2HyC1ISGoXp9xvrPJP3Qt5zI34IW5Pn0/kzL9M36l4Zrj9fWcYz2/SOiRBTpDyA/wOag6bnc6uQhC/jV767H6SYGcZfb7jLiXW84L1HY0ItkXOmUkkpISJ9b9EopXRgu7RBQxRqqSSJSNgYYi2kWpBsXNeJMSxdTmdCCThxjH5ksQWfPFsJbHnrazs/yZmbOUZ35vr6wqDZ6ErKtHpWMW4+4CVQjoIPGzd3I6hgyfoonjMux84pXFjU42bHbRoZrMFKpK1BWksHa4iYxT4jM+ujaK23dnkE20OpdHeajLAFVu8fDot1oFoklR2NmZTvoTSQqvYZNuC+713PcJboiTn2d9rFgzV3D4eLF7wm5s0Q0e6kBeKcI8b4N6D28TPls773pP3qmeeZoaXUJFERNcTSXardUQM1SIN1oN6B/dfKmSnMrOEO27aNP7bzCa3H8i5oAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab4",title:"Lab4",src:"/Turbonomic-2Day-Partner-Workshop/static/7e80f3933d2dd12fb09b78dcdec7f6cb/3cbba/FinOps18.png",srcSet:["/Turbonomic-2Day-Partner-Workshop/static/7e80f3933d2dd12fb09b78dcdec7f6cb/7fc1e/FinOps18.png 288w","/Turbonomic-2Day-Partner-Workshop/static/7e80f3933d2dd12fb09b78dcdec7f6cb/a5df1/FinOps18.png 576w","/Turbonomic-2Day-Partner-Workshop/static/7e80f3933d2dd12fb09b78dcdec7f6cb/3cbba/FinOps18.png 1152w","/Turbonomic-2Day-Partner-Workshop/static/7e80f3933d2dd12fb09b78dcdec7f6cb/0b124/FinOps18.png 1728w","/Turbonomic-2Day-Partner-Workshop/static/7e80f3933d2dd12fb09b78dcdec7f6cb/4ea69/FinOps18.png 2304w","/Turbonomic-2Day-Partner-Workshop/static/7e80f3933d2dd12fb09b78dcdec7f6cb/21adf/FinOps18.png 3258w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)("p",null,"Just by switching tabs, the bank can now see the potential savings from AWS storage, assuming they take all the recommended actions.\nOn the AWS tab, select a row and click the corresponding DETAILS button (3)."),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},"Point out the details under ACTION ESSENTIALS on the Action Details panel, as highlighted in the screenshot and narration below.")),(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"58.68055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAABfElEQVQoz51Syw7UMAzM53PgW7iAxJ0PQOITuKDdsm3zrh07GZS0XZXlIYGlaZJGscczNnnLiDGilAJVhWrdUY91/FO01tCjr1cw847CICaYZV1wv9/hg0cmRmbFVupAZkHMGd77Z8EzEY4CIoIQAlgKQkkwzjks6wpKEWxXkHfY3LrDLqg5jQTWruNh32ttKFIPKOqRvIdJKaGIAIURpjvs/MA6TQhzT7YBwaPWOnAGEcP5gJgyqMhxtzM3vap1DluKcNMN5Cycm/Bt/ool3mDzdxQV5JyfCTMVzC4hpPyLtqZrNzQSgQ9h0NdWUZqgNIVgN8Y6CyJ66iaiw7hXk0x3uLddVeGcBRPDU8AtTljEwmmAVh1Onm0XKejTcZ7bVcNuirV2uNj3VSs2JkRKIGWQUFfn+eD6+Ho+18Gwt9KrdRaDAfPBug7Gv5u/P8H0T9etvVS9Mnll9bcwY0Drjmulf2H1E8OPX97jzae3+PD5Hexi8Xg8/hvzPOMH7f+pR07GGD0AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab4",title:"Lab4",src:"/Turbonomic-2Day-Partner-Workshop/static/a9c433aba973ffe7af2bec080226c10e/3cbba/FinOps19.png",srcSet:["/Turbonomic-2Day-Partner-Workshop/static/a9c433aba973ffe7af2bec080226c10e/7fc1e/FinOps19.png 288w","/Turbonomic-2Day-Partner-Workshop/static/a9c433aba973ffe7af2bec080226c10e/a5df1/FinOps19.png 576w","/Turbonomic-2Day-Partner-Workshop/static/a9c433aba973ffe7af2bec080226c10e/3cbba/FinOps19.png 1152w","/Turbonomic-2Day-Partner-Workshop/static/a9c433aba973ffe7af2bec080226c10e/0b124/FinOps19.png 1728w","/Turbonomic-2Day-Partner-Workshop/static/a9c433aba973ffe7af2bec080226c10e/4ea69/FinOps19.png 2304w","/Turbonomic-2Day-Partner-Workshop/static/a9c433aba973ffe7af2bec080226c10e/df13e/FinOps19.png 2720w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)("p",null,"The Action Details panel provides the bank with supporting details behind the recommendation. Under the ‘Action Essentials’ section, it also shows whether the action can be taken immediately, whether downtime is required, and whether the action is manually reversible once taken. Click “Execute Action.”"),(0,n.kt)("p",null,"Now let’s examine the bank’s cost savings opportunities from moving volumes to alternate storage types that are a better fit for the workloads at hand."),(0,n.kt)("h2",null,"Select the right type of storage for the workloads"),(0,n.kt)("p",null,"The bank needs to choose the right storage volume for their workloads. Capacity and performance are two fundamental factors around which these choices should be made. We’ll see how even if wrong initial choices are made, the Turbonomic platform will detect these optimization and cost reduction opportunities using its continuous feedback loop."),(0,n.kt)("ol",{start:8},(0,n.kt)("li",{parentName:"ol"},"Under the SCALE category of the left navigation bar, select Volumes.")),(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"48.958333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAABdklEQVQoz4WS64rbUAyE/f7PWLYpNEt2403OTUfSuU2RXLfprxoGZLBG30jeWARUK6ow5pp4fdZa/xfWn+/nnNjev3/D4/aOx8dPfMY7YozQpuAh/zTitX4dOheYGSKCMQa2j+sPhP2G8tyhqhBhjNEhQ33iWtPJxxz+bjV3BjU6pOR9Zmppt8QF1Bg8FJkIxOpiFrTWQFVAXMEqyJRRasE1XnF5XPC2v+HydcGTAypX5JyxcRe4GoNYUKqisEJbd6IqDaLNaxtg0eaYWGNh9ommDU+J0N5ARNhqY9TObhgz4ZEYz3zgzzkQizhl782jWZOoeG3KJeOz7n7UlNJpeBCmUt0sFFuy+pITmSGj9+50ZmikpwoR7vwF1lfDdhBWtn01j9la9+OwRz7Mj6OJ6zS0OkjyP8Mj/92hIKQjsqnyceWQ2QktPgujlOLN52ULFdz47oQhBGxFCKessVRxWWTbmx2KfxMZjZmc+zMii3mPO2KKPuwX8KILMTVOiHMAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab4",title:"Lab4",src:"/Turbonomic-2Day-Partner-Workshop/static/62f315901487baf7be0576d63f9c859f/3cbba/FinOps20.png",srcSet:["/Turbonomic-2Day-Partner-Workshop/static/62f315901487baf7be0576d63f9c859f/7fc1e/FinOps20.png 288w","/Turbonomic-2Day-Partner-Workshop/static/62f315901487baf7be0576d63f9c859f/a5df1/FinOps20.png 576w","/Turbonomic-2Day-Partner-Workshop/static/62f315901487baf7be0576d63f9c859f/3cbba/FinOps20.png 1152w","/Turbonomic-2Day-Partner-Workshop/static/62f315901487baf7be0576d63f9c859f/0b124/FinOps20.png 1728w","/Turbonomic-2Day-Partner-Workshop/static/62f315901487baf7be0576d63f9c859f/4ea69/FinOps20.png 2304w","/Turbonomic-2Day-Partner-Workshop/static/62f315901487baf7be0576d63f9c859f/e066d/FinOps20.png 3256w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)("p",null,"We can immediately see the various scale options, along with the bank’s projected savings."),(0,n.kt)("ol",{start:9},(0,n.kt)("li",{parentName:"ol"},"Click DETAILS on the first row.")),(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"42.36111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAABZUlEQVQoz0VRW27cMAz0/c/Vrx6gRfITIAnSdO21LfGpl6cQt00FEBwNpOGQXGqtcDP03tBGQ5wL//M/POF1YVwjol89uA/+xLeP73hPv4ABLPe0g1zBrhBXkBHEBUkZ5AwqjENOZCO8nW943p/xtD7h5+0HXs9XWDW02kD5AJ0blns+sHHGShm7ELQKuAjWnEBO0KZImnDw8ShWBVkzkiTceMVqG5JlbLd3HB8vWMwLSArEKtwbRh/ofQTXW4/qcyzFS+DJlfLASTK4SmBmgYhiySzYTsE9K7I4emvw2oLzUlCKg4VBRDA3lFogKjH3z/M3dj9gajjOA0QZi5qHEOl0WWI5Zc5EPJxMd6oaYWbBuXvEqQlUOdzPgsyMRewhxlqgXjF6R+s9irTWcF0jRKfYzGOMcOnmSJqRKz+Wwn8FiQVHFpw0W56fSrS6J4G5fzmcDtT06y4sWNOGuxygTNj3Pd78Acuoa6pHrfeIAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab4",title:"Lab4",src:"/Turbonomic-2Day-Partner-Workshop/static/c1d276e5c858577f8f3fd4a7d1164bb4/3cbba/FinOps21.png",srcSet:["/Turbonomic-2Day-Partner-Workshop/static/c1d276e5c858577f8f3fd4a7d1164bb4/7fc1e/FinOps21.png 288w","/Turbonomic-2Day-Partner-Workshop/static/c1d276e5c858577f8f3fd4a7d1164bb4/a5df1/FinOps21.png 576w","/Turbonomic-2Day-Partner-Workshop/static/c1d276e5c858577f8f3fd4a7d1164bb4/3cbba/FinOps21.png 1152w","/Turbonomic-2Day-Partner-Workshop/static/c1d276e5c858577f8f3fd4a7d1164bb4/0b124/FinOps21.png 1728w","/Turbonomic-2Day-Partner-Workshop/static/c1d276e5c858577f8f3fd4a7d1164bb4/4ea69/FinOps21.png 2304w","/Turbonomic-2Day-Partner-Workshop/static/c1d276e5c858577f8f3fd4a7d1164bb4/17230/FinOps21.png 3216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)("ol",{start:10},(0,n.kt)("li",{parentName:"ol"},"Point out the details on the Action Details panel, as highlighted in the screenshot and narration below.")),(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"59.02777777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAAB3UlEQVQoz3WSzXLbMAyE9fK99106PXR67zPk0jax4zS2RFKy+P+jrwPGVn3pzuwAkCBwtcTgQ8A6R6mNtkHbNmr7x7bHRhXW2rltG4KUIilGck49H7SauFwuWBdwPvYYQsKHhJMYM1cXWV1g9QnnA977fWDRI+50JOkz9nJgUC+/eP/9k/HwzHR47tGrkWQmsFdijBijcc7dFKX+LITwQe8oOUFr0CpDcZbqLOWBUqfrQg2hD7DWcofkWut+iDaanPOuVjC0h+IRuVRSbt2beZ67KoH0i9/CKr7ffJahwiHljLUR7zPORVzPE84lSqldgaiUixDEXFCLw1w9IZVOn0o/SC5uiCGzLivRB1KI5JhopbLVBqKmlN54R0gZNV/7Zjw+3395fj0yHV9QwtcDy58T+vVANIptMQTvu2/3j2OuLC5x9bnfeurW1P394Ixi1RPWKKxWOKP3PF6XrlDWJKYPD8XLeV5wzrNa15lzgY0PD+t/LmVf8Fq7hzJYIOvz9vbGNE2cxzOn9xOrX6lUSisM1I2SMjEG1rBig+2UplJz37VJTT3eBwprqZgwc/Yjpi6oYljqyvDl6Ruffnzm69N3jNJcxsuNY1ehlLrtnUFptdeSa6Ux2vS692jDXyFAomAHxDQgAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab4",title:"Lab4",src:"/Turbonomic-2Day-Partner-Workshop/static/8d18ae24270171127ca69facc400415a/3cbba/FinOps22.png",srcSet:["/Turbonomic-2Day-Partner-Workshop/static/8d18ae24270171127ca69facc400415a/7fc1e/FinOps22.png 288w","/Turbonomic-2Day-Partner-Workshop/static/8d18ae24270171127ca69facc400415a/a5df1/FinOps22.png 576w","/Turbonomic-2Day-Partner-Workshop/static/8d18ae24270171127ca69facc400415a/3cbba/FinOps22.png 1152w","/Turbonomic-2Day-Partner-Workshop/static/8d18ae24270171127ca69facc400415a/0b124/FinOps22.png 1728w","/Turbonomic-2Day-Partner-Workshop/static/8d18ae24270171127ca69facc400415a/4ea69/FinOps22.png 2304w","/Turbonomic-2Day-Partner-Workshop/static/8d18ae24270171127ca69facc400415a/f67b1/FinOps22.png 2708w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"58.68055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAABv0lEQVQoz31TSa7UMBDN6VlyEHZILBEXQOIKbLoz0PE8lZ1yHnI13egP+iU9OWVXnmt4nogqSik4ceIjO89T8NqO4wAzy9paw+RsgFIK1hr44JFSQghBDgfBCBx4WDs6YmmCTA3MHdw7eu8SPznnYIyBtRbaaFmHH2MU0pG9NkbWYaU2GJ8QcoVPhEQN1FhIR/7Te2UM6+NmZnRmnHwI0DtKiliuF+x/VuzbhtuygmKCsHHHJPXz8QZUCQczmjVw24piDVAJSSv42yb+rmdcbr9xczN02mDDisnHgN0qmGBhvHki5ICjM4pRUFqDapXMcylIOct3pIxACQ0MRwlEEVMoAZWq9Gtk+3qa1Zn7wLyT/RH3GBKVglbbkABCiOhUMH0kE/nJ6uewxoWjFUR0PyP6RwjE0cchm0dG70Fk4p3IaEy51vrEII81wdWAxBm2BmTyd8L+IDjxhrAYjV0pkYX0LUaR0dCfigYXs8BxxJYVbFIvS34poLtXjUYc/WMeWgK3ilqy9I1SQnIe6CdqyugpYfr28ws+f/+EH7++wlsPpXYoreT1aK2h1gXqeoFartCCGWaZoebrf4z9dRb8BWbrpKHA1laIAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab4",title:"Lab4",src:"/Turbonomic-2Day-Partner-Workshop/static/2a9aae07cf5073b22af283e496b4a0f2/3cbba/FinOps23.png",srcSet:["/Turbonomic-2Day-Partner-Workshop/static/2a9aae07cf5073b22af283e496b4a0f2/7fc1e/FinOps23.png 288w","/Turbonomic-2Day-Partner-Workshop/static/2a9aae07cf5073b22af283e496b4a0f2/a5df1/FinOps23.png 576w","/Turbonomic-2Day-Partner-Workshop/static/2a9aae07cf5073b22af283e496b4a0f2/3cbba/FinOps23.png 1152w","/Turbonomic-2Day-Partner-Workshop/static/2a9aae07cf5073b22af283e496b4a0f2/0b124/FinOps23.png 1728w","/Turbonomic-2Day-Partner-Workshop/static/2a9aae07cf5073b22af283e496b4a0f2/4ea69/FinOps23.png 2304w","/Turbonomic-2Day-Partner-Workshop/static/2a9aae07cf5073b22af283e496b4a0f2/02168/FinOps23.png 2716w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)("p",null,"We can see that this particular volume is underutilized from both IOPS (1) and throughput (2) perspectives. Based on the actual utilization pattern of this workload, Turbonomic’s analytics show that this workload does not need a GP3 and that the performance requirements of the workload can be met with a cheaper ST1 storage tier. This workload does not need the provisioned 3,000 IOPS and can get by with a much lower 130 IOPS (Second Screenshot). We therefore see that the storage capacity was overprovisioned, at a cost that was 8-9% too high. Turbonomic’s analytics engine computes the projected cost savings (3 - First screenshot)."),(0,n.kt)("p",null,"By analyzing and understanding the data access patterns of their workloads, the bank can make cost-efficient trade-offs about their storage choices, including the storage type, capacity, and IOPS. Click “Execute Action”"))}b.isMDXComponent=!0},4295:function(a,e,t){t.d(e,{Z:function(){return w}});var o=t(7294),n=t(8650),i=t.n(n),s=t(5444),r=t(9403),c=t(3321),l=t(5900),p=t.n(l),b=function(a){var e,t=a.title,n=a.theme,i=a.tabs,s=void 0===i?[]:i;return o.createElement("div",{className:p()("PageHeader-module--page-header--NqfPe",(e={},e["PageHeader-module--with-tabs--vbQ-W"]=s.length,e["PageHeader-module--dark-mode--WCeH8"]="dark"===n,e))},o.createElement("div",{className:"bx--grid"},o.createElement("div",{className:"bx--row"},o.createElement("div",{className:"bx--col-lg-12"},o.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))},d=function(a){var e=a.relativePagePath,t=a.repository,n=(0,s.useStaticQuery)("1364590287").site.siteMetadata.repository,i=t||n,r=i.baseUrl,c=i.subDirectory,l=r+"/edit/"+i.branch+c+"/src/pages"+e;return r?o.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},o.createElement("div",{className:"bx--col"},o.createElement("a",{className:"EditLink-module--link--IDrl1",href:l},"Edit this page on GitHub"))):null},g=t(4275),m=t(1721),h=function(a){function e(){return a.apply(this,arguments)||this}return(0,m.Z)(e,a),e.prototype.render=function(){var a=this.props,e=a.title,t=a.tabs,n=a.slug,r=n.split("/").filter(Boolean).slice(-1)[0],c=t.map((function(a){var e,t=i()(a,{lower:!0,strict:!0}),c=t===r,l=new RegExp(r+"/?(#.*)?$"),b=n.replace(l,t);return o.createElement("li",{key:a,className:p()((e={},e["PageTabs-module--selected-item--aBB0K"]=c,e),"PageTabs-module--list-item--024o6")},o.createElement(s.Link,{className:"PageTabs-module--link--Kz-7R",to:""+b},a))}));return o.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},o.createElement("div",{className:"bx--grid"},o.createElement("div",{className:"bx--row"},o.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},o.createElement("nav",{"aria-label":e},o.createElement("ul",{className:"PageTabs-module--list--xLqxG"},c))))))},e}(o.Component),A=h,u=t(2881),f=t(6958),k=t(36),y=function(a){var e=a.date,t=new Date(e);return e?o.createElement(k.X2,{className:"last-modified-date-module--row--XJoYQ"},o.createElement(k.sg,null,o.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",t.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},w=function(a){var e=a.pageContext,t=a.children,n=a.location,l=a.Title,p=e.frontmatter,m=void 0===p?{}:p,h=e.relativePagePath,k=e.titleType,w=m.tabs,T=m.title,W=m.theme,O=m.description,v=m.keywords,P=m.date,D=(0,f.Z)().interiorTheme,E=(0,s.useStaticQuery)("2456312558").site.pathPrefix,F=E?n.pathname.replace(E,""):n.pathname,N=w?F.split("/").filter(Boolean).slice(-1)[0]||i()(w[0],{lower:!0}):"",S=W||D;return o.createElement(c.Z,{tabs:w,homepage:!1,theme:S,pageTitle:T,pageDescription:O,pageKeywords:v,titleType:k},o.createElement(b,{title:l?o.createElement(l,null):T,label:"label",tabs:w,theme:S}),w&&o.createElement(A,{title:T,slug:F,tabs:w,currentTab:N}),o.createElement(u.Z,{padded:!0},t,o.createElement(d,{relativePagePath:h}),o.createElement(y,{date:P})),o.createElement(g.Z,{pageContext:e,location:n,slug:F,tabs:w,currentTab:N}),o.createElement(r.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-labs-lab-4-finops-mdx-f20558a961d1ce852e83.js.map