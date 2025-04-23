<script>
</script>

<header
    class="flex justify-start items-center flex-col bg-amber-400 min-w-screen"
>
    <section class="flex flex-row items-center justify-start p-5 gap-[10rem]">
        <a href="/page_insertionstock">
            <button class="buttonheader">your storage</button></a
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

<h1 class="pt-25">This is you account</h1>
<p class="pb-10">
    here you can see your account information and manage your profile settings.
    You can also view your recipes and stocks history from here.
</p>
<p>
    you are :
</p>
<div class="flex flex-row justify-center pt-10">
    <input
        type="text"
        placeholder="add your name"
        value=""
        class="border-t-2 border-b-2 border-l-2 border-r-2 rounded-l-2xl"
    />
    <input
        type="text"
        placeholder="add your email"
        value=""
        class="border-t-2 border-b-2 border-l-0 border-r-2"
    />
    <input
        type="text"
        placeholder="add your password"
        value=""
        class="border-t-2 border-b-2 border-l-0 border-r-0"
    />
    <input
        type="submit"
        value="register"
        class="bg-red-200 rounded-r-2xl border-2 w-30 hover:bg-amber-700 "
    />
</div>
<div class="flex flex-row justify-center pt-10">
    <input
        type="text"
        placeholder="email"
        value=""
        class="border-t-2 border-b-2 border-l-2 border-r-2 rounded-l-2xl"
    />
    <input
        type="text"
        placeholder="password"
        value=""
        class="border-t-2 border-b-2 border-l-0 border-r-0"
    />
    <input
        type="submit"
        value="login"
        class="bg-red-200 rounded-r-2xl border-2 w-20 hover:bg-amber-700"
    />
</div>
<footer class="flex justify-end items-center pt-20 flex-col">
    <a href="/"
        ><button class="bg-red-200 rounded-4xl w-70 p-5 hover:bg-red-400"
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
