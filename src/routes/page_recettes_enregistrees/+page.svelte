<script>
</script>

<header
    class="flex justify-start items-center flex-col bg-amber-400 min-w-screen"
>
    <section class="flex flex-row items-center p-5 gap-[10rem]">
        <a href="/page_insertionstock">
            <button class="buttonheader">your stocks</button></a
        >
        <a href="/page_compte">
            <button class="buttonheader">your account</button></a
        >
        <a href="/page_recettes_enregistrees">
            <button class="buttonheader">your recipes</button></a
        >
        <a href="/page_recettes_enligne">
            <button class="buttonheader">the recipes</button></a
        >
        <a href="/page_feedback">
            <button class="buttonheader">your feedback</button></a
        >
    </section>
</header>

<h1 class="pt-25">Welcome to your starred recipes</h1>
<br />
<p>
    here you can see your starred recipes, and manage them. You can also view
    your stocks history from here and send to the web some of your recipes*.<br
    />
    *they need to be validated by the admin before being published.
</p>
<div class="flex flex-row justify-around pt-10">
    <div>
        <p class="w-50 h-10 bg-amber-950 rounded-t-2xl"></p>
        <p class="w-50 h-50 bg-white rounded-b-2xl"></p>
    </div>
    <input
        type="submit"
        value="add a recipe"
        class="bg-blue-200 rounded-2xl border-2 p-5 mt-20 mr-20 w-70 hover:bg-green-200"
    />
</div>
<footer class="flex justify-end items-center pt-20 flex-col">
    <a href="/"
        ><button class="bg-red-200 rounded-4xl p-5 hover:bg-red-400 w-70"
            >back</button
        ></a
    >
</footer>

<style>
    .buttonheader {
        background-color: lightcoral;
        border-radius: 2rem;
        padding: 1rem;
        margin: 2%;
        width: 10rem;
        text-align: center;
        border: 1px solid;
    }
    .buttonheader:hover {
        background-color: fuchsia;
    }
</style>
