<template>    
    <div id="home">
        <h3>{{ msg }}</h3>
        <h1>
            <a href="/">
                <img alt="MyMarkdown" src="../assets/logo.png" >
            </a>
        </h1>
        <div class="headcopy">
            <a href="https://www.amazon.co.jp/Vue-js%E3%81%A8Firebase%E3%81%A7%E4%BD%9C%E3%82%8B%E3%83%9F%E3%83%8BWeb%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9-%E6%8A%80%E8%A1%93%E6%9B%B8%E5%85%B8%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA%EF%BC%88NextPublishing%EF%BC%89-%E6%B8%A1%E9%82%8A-%E9%81%94%E6%98%8E/dp/4844398350/ref=as_li_ss_il?&linkCode=li2&tag=akino09-22&linkId=6881cca2ed22353bd4bfb8bef1276f55&language=ja_JP" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=4844398350&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=akino09-22&language=ja_JP" ></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=akino09-22&language=ja_JP&l=li2&o=9&a=4844398350" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
            <a :href="amazonUrl">
                <p>『Vue.jsとFirebaseで作るミニWebサービス』(技術書典シリーズ)</p>
            </a>
            <p>を参考に作成しました。</p>
        </div>
        <div class="bodycopy">
            <p>最小限の機能に絞ったマークダウンエディター</p>
            <p>Googleアカウントで5秒で登録</p>
            <button @click="login"> googleLogin </button>
        </div>
    </div>
</template>

<script>
export default {
    name:"home",
    data(){
        return{
            msg:"かつてないほどシンプルなメモ帳",
            amazonUrl:"https://amzn.to/2X7qUtX"
        };
    },
    methods: {
        login: function() {
            firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());
        },
    }
};
</script>

<style lang="scss" scoped>
.headcopy {
    margin-top: 30px;
    margin-bottom: 50px;
}
.bodycopy {
    margin-top: 20px;
}
</style>