
export class MockAppService{
    getImagesFromText(query, limit){
       return {
            data: [
                {
                    id:'a1',
                    title: 'slug'
                },
                {
                    id:'a2',
                    title: 'slugitude'
                },
                {
                    id:'a3',
                    title: 'slugatorn'
                },
            ],
          pagination:{
              total_count:364,
              count:25
          }
    }}
}
