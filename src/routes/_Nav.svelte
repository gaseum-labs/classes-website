<script lang="ts">
import { browser } from "$app/env";

  import { page } from "$app/stores";

  let paths = ["/parkour", "/lavacaster", "/engineer", "/hunter", "/diver", "/enchanter", "/miner"]
  let colors = ["#FF71D4", "#FF5252", "#FFB949", "#56F148", "#35A7FF", "#9737CA", "#717171"]

  $: if ($page && browser) {
    (document.querySelector('.page-indicator') as HTMLDivElement).style.left = `${paths.indexOf($page.path) * 100/7}%`;
    (document.querySelector('.page-indicator') as HTMLDivElement).style.backgroundColor = colors[paths.indexOf($page.path)];
  }
</script>

<div class="header">
  <div class="page-indicator"></div>
  <nav>
    <a href="/parkour" class="parkour"><img src="/images/parkour.png" alt=""></a>
    <a href="/lavacaster" class="lavacaster"><img src="/images/lavacaster.png" alt=""></a>
    <a href="/engineer" class="engineer"><img src="/images/engineer.png" alt=""></a>
    <a href="/hunter" class="hunter"><img src="/images/hunter.png" alt=""></a>
    <a href="/diver" class="diver"><img src="/images/diver.png" alt=""></a>
    <a href="/enchanter" class="enchanter"><img src="/images/enchanter.png" alt=""></a>
    <a href="/miner" class="miner"><img src="/images/miner.png" alt=""></a>
  </nav>
</div>

<style lang="scss">
  .header {
    position: relative;
  }

  nav {
    display: flex;
  }

  .page-indicator {
    position: absolute;
    top: 103px;
    left: 0;
    width: calc(100% / 7);
    height: 3px;
    background: red;
    transition: left 1s, background-color 1s;
  }

  a {
    flex: 1;
    height: 100px;
  }

  a img {
    height: 70%;
    margin: 15px auto;
    display: block;
  }

  .parkour {
    background-color: #FF71D4;
  }
  
  .lavacaster {
    background-color: #FF5252;
  }
  
  .engineer {
    background-color: #FFB949;
  }
 
  .hunter {
    background-color: #56F148;
  }
  
  .diver {
    background-color: #35A7FF;
  }

  .enchanter {
    background-color: #9737CA;
  }

  .miner {
    background-color: #717171;
  }
</style>