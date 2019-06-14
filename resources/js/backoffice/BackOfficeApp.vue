<template>
    <div class="container">
        From back office app component

        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Launch demo modal
        </button>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>


        <swiper :options="swiperOption">
            <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">I'm Slide {{ slide }}</swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    import {swiper, swiperSlide} from 'vue-awesome-swiper'

    @Component({
        components: {
            swiper,
            swiperSlide
        }
    })
    export default class BackOfficeApp extends Vue {
        mounted() {
            console.log('Hello World');

            setInterval(() => {
                console.log('simulate async data')
                if (this.swiperSlides.length < 10) {
                    this.swiperSlides.push(this.swiperSlides.length + 1)
                }
            }, 3000);
        }

        swiperOption: object = {
            pagination: {
                el: '.swiper-pagination'
            }
        };

        swiperSlides: number[] = [1, 2, 3, 4, 5];
    }
</script>
