export default function Footer() {
  return (
    <>
      <footer class="text-gray-700 body-font">
        <div class="container px-5 py-20 mx-auto">
          <div class="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
            <div class="lg:w-1/6 md:w-1/2 w-full px-4">
              <div class="lg:w-1/6 md:w-1/2 w-full px-4"></div>
            </div>
          </div>
        </div>
        <div class="text-gray-700 body-font">
          <div class="container px-5 py-8 flex flex-wrap mx-auto items-center"></div>
        </div>
        <div class="bg-gray-200">
          <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p class="text-gray-500 text-sm text-center sm:text-left">
              © KAW Inc.
            </p>
            <span class="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
              <a href class="text-gray-500">
                <a href="https://github.com/kerry91">
                  <i class="fa-brands fa-github fa-lg"></i>
                </a>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
