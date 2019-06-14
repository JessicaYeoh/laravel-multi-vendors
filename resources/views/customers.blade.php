<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Customers</title>
</head>
<body>
<div class="flex-center position-ref full-height">
    <div class="content">
        <h1 class="title m-b-md">
            Customers
        </h1>
        <div id="app">
            <hello-world></hello-world>
        </div>
    </div>
</div>
<script src="{{ mix('js/customers/manifest.js') }}"></script>
<script src="{{ mix('js/customers/vendor.js') }}"></script>
<script src="{{ mix('js/customers/customers.js') }}"></script>
</body>
</html>
