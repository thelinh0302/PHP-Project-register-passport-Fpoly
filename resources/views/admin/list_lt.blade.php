@extends('layout_admin')
@section('noidung2')
    <div class="container mt-4">
        <!-- title -->
        <section>
            <div class="alert alert-success text-center">
                <h4>Bộ phận Lưu trữ</h4>
                Nơi lưu trữ Hồ sơ đã qua <strong>Xét thực</strong> và <strong>Xét duyệt</strong> chờ <strong>Lưu trữ</strong>
            </div>
        </section>
        <!-- end title -->
            <!-- table chờ xác thực -->
            <section>
                <div class="  d-flex justify-content-between align-items-center">
                    <h5 class="text-danger pt-3 ">Danh sách chờ Lưu trữ</h5>
                    <!-- tìm kiếm -->
                    <div>
                        <label for="search" class=" m-2"><i class="fa fa-search" style="font-size:1.5em"></i></label>
                        <input type="text" class="form-controller p-2" id="search" name="search" style="width: 300px" placeholder="Nhập mã hộ chiếu để tìm! (ex: 1)">
                    </div>
                    <!-- end tìm kiếm -->
                </div>
                <div class="table-responsive-sm mt-3 " id="list_lt2">
                    <table class="table table-hover table-light table-nowarp ">
                        <thead class="thead-light">
                            <tr>
                                <th>Id Hồ sơ</th>
                                <th>Tên người đăng ký</th>
                                <th>Số CMND</th>
                                <th>Ngày đăng ký</th>
                                <th>Tình trạng</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tfoot>
                            @foreach($result_lt as $item)
                                <tr>
                                    <td>{{$item['id_hochieu']}}</td>
                                    <td>{{$item['hoten']}}</td>
                                    <td>{{$item['cmnd']}}</td>
                                    <td>{{$item['ngaycap']}}</td>
                                    <td><span class="text-warning">Chờ lưu trữ</span></td>
                                    <td @if(Auth::guard('admin')->id() == 5) style="display:none" @endif>
                                        <a name="" id="" class="btn btn-primary" href="admin/luutru2/{{$item['id_hochieu']}}" role="button">Lưu Trữ</a>
                                    </td>
                                </tr>
                            @endforeach
                        </tfoot>
                    </table>
                    <tr>
                        {!!$result_lt->links()!!}
                    </tr>
                </div>
                <div class="table-responsive-sm mt-3 " id="list_lt" style="display:none">
                    <table class="table table-hover table-light table-nowarp ">
                        <thead class="thead-light">
                            <tr>
                                <th>Id Hồ sơ</th>
                                <th>Tên người đăng ký</th>
                                <th>Số CMND</th>
                                <th>Ngày đăng ký</th>
                                <th>Tình trạng</th>
                                <th></th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </section>
            <!-- End table chờ xác thực -->
        </div>
        <!-- End body -->
        <!-- footer -->
        <section class="mb-5"></section>
        <script type="text/javascript">
            $('#search').on('keyup',function(){
                $value=$(this).val();
                if($value != ""){
                    document.getElementById("list_lt").style.display = "block";
                    document.getElementById("list_lt2").style.display = "none";
                    $.ajax({
                    type : 'get',
                    url : '{{URL::to('admin/show-lt/search')}}',
                    data:{'search':$value},
                    success:function(data){
                    $('tbody').html(data);
                    }
                });
                }else{
                    document.getElementById("list_lt").style.display = "none";
                    document.getElementById("list_lt2").style.display = "block";
                }
            })
        </script>
        <script type="text/javascript">
            $.ajaxSetup({ headers: { 'csrftoken' : '{{ csrf_token() }}' } });
        </script>
    @endsection
