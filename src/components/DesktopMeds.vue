<template>
    <div class="flex flex-column w-8 mx-auto mt-8">
        <div class="header_36 flex mb-6">
            Compare similar products
        </div>
        <table  class="flex align-items-center" cellpadding="5px" cellspacing="5px">
            <tbody>
                <tr>
                    <td></td>
                    <td class="text-center font-semibold text-xl" style="background-color:#E9F2FF; border-radius:16px 16px 0px 0px">
                        <img src="/CLKITSDA30_MAIN.webp">
                        <br>
                        <div>KITS Daily</div>
                        <br>
                        <div class="compare-contacts m-5">
                            <span class="btn_details hidden">See details</span>
                        </div>
                    </td>
                    <td class="text-center font-semibold text-xl">
                        <img src="/acuvue_moist.webp">
                        <br>
                        <div>Acuvue Moist</div>
                        <br>
                        <div class="compare-contacts">
                            <a class="no-underline" href="https://www.kits.ca/contact_lenses/CL1DAVMJJ" target="_blank">
                                <span class="btn_details hover:surface-800 hover:text-white">See details</span>
                            </a>
                        </div>
                    </td>
                    <td class="text-center font-semibold text-xl">
                        <img src="/alcon_precision_1.webp">
                        <br>
                        <div>Precision 1</div>
                        <br>
                        <div class="compare-contacts">
                            <a class="no-underline" href="https://www.kits.ca/contact_lenses/CLP130AL">
                                <span class="btn_details hover:surface-800 hover:text-white">See details</span>
                            </a>
                        </div>
                    </td>
                    <td class="text-center font-semibold text-xl">
                        <img src="/alcon_total1.webp">
                        <br>
                        <div>Dailies Total 1</div>
                        <br>
                        <div class="compare-contacts">
                            <a class="no-underline" href="https://www.kits.ca/contact_lenses/CLDT130CACV.html">
                                <span class="btn_details hover:surface-800 hover:text-white">See details</span>
                            </a>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="table_title ">
                        <div class="mt-6 border_bottom_grey">Price</div>
                    </td>
                    <td class="table_content" style="background-color:#E9F2FF">
                        <div class="mt-6 border_bottom_grey">
                            <span>
                                $28.00 for 30 lenses
                            </span>
                        </div>
                    </td>
                    <td class="table_content">
                        <div class="border_bottom_grey mt-6"> $40.00 for 30 lenses </div>
                    </td>
                    <td class="table_content">
                        <div class="border_bottom_grey mt-6"> $42.00 for 30 lenses </div>
                    </td>
                    <td class="table_content">
                        <div class="border_bottom_grey mt-6"> $51.00 for 30 lenses </div>
                    </td>
                </tr>
                <tr>
                    <td class="table_title">
                        <div class="border_bottom_grey">Material</div>
                    </td>
                    <td class="table_content" style="background-color: #E9F2FF;">
                        <div class="border_bottom_grey">
                            Olifilcon B (Silicone Hydrogel)
                            <br>
                        </div>
                    </td>
                    <td class="table_content">
                        <div class="border_bottom_grey">
                            Etafilcon A (Hydrogel)
                        </div>
                    </td>
                    <td class="table_content">
                        <div class="border_bottom_grey">
                            Filcon 2 (Hydrogel)
                        </div>
                    </td>
                    <td class="table_content">
                        <div class="border_bottom_grey">
                            Somofilcon A (Silicone Hydrogel)
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="table_title">
                        <div class="border_bottom_grey">Dk/t (Oxygen Permeability)</div>
                    </td>
                    <td class="table_content" style="background-color: #E9F2FF;">
                        <div class="border_bottom_grey"><br>50-60</div>
                    </td>
                    <td class="table_content">
                        <div class="border_bottom_grey"><br>24-24</div>
                    </td>
                    <td class="table_content">
                        <div class="border_bottom_grey"><br>40</div>
                    </td>
                    <td class="table_content">
                        <div class="border_bottom_grey"><br>156</div>
                    </td>
                    
                </tr>
                <tr>
                    <td class="table_title">
                        <div class="border_bottom_grey">Fit</div>
                    </td>
                    <td class="table_content" style="background-color: #E9F2FF;">
                        <div class="border_bottom_grey">
                            Highly flexibile
                        </div>
                    </td>
                    <td class="table_content">
                        <div class="border_bottom_grey">
                            Flexibile fit
                        </div>
                    </td>
                    <td class="table_content">
                        <div class="border_bottom_grey">
                            Flexibile fit
                        </div>
                    </td>
                    <td class="table_content">
                        <div class="border_bottom_grey">
                            Highly flexibile
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="table_title">
                        <div class="mb-6">Best for</div>
                    </td>
                    <td class="table_content" style="background-color: #E9F2FF; border-radius:0px 0px 16px 16px">
                        <div class="mb-6">Cost effective, all day comfort</div>
                    </td>
                    <td class="table_content">
                        <div class="mb-6">Comfort and ease of use</div>
                    </td>
                    <td class="table_content">
                        <div class="mb-6">Enhanced comfort for extended daily wear</div>
                    </td>
                    <td class="table_content">
                        <div class="mb-6">Maximum hydration for sensitive eyes</div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>

</script>

<style scoped>
.header_36 {
    font-size: 36px;
    font-weight: 400;
}
img {
    max-width: 100%;
}
.btn_details {
    border: 1px solid #0E0F11;
    padding: 12px 24px 12px 24px;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 700;
    color: #0E0F11;
}
.compare-contacts {
    margin-top: 10px;
}
.border_bottom_grey {
    border-bottom: 1px solid #BBC1C9;
    padding-bottom: 5px;
}
.table_title {
    font-size: 16px;
    font-weight: 600;
    padding-right: 15px;
}
.table_content {
    font-size: 16px;
    font-weight: 400;
    padding: 3px 15px;
}
table {
    border-collapse: collapse;
    text-indent: initial;
    border-spacing: 2px;
}
td {
    display: table-cell;
    vertical-align: inherit;
    unicode-bidi: isolate;
}
</style>
