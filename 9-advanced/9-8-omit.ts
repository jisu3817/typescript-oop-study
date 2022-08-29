{
}
{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMetaData = Omit<Video, 'url' | 'data' | 'h'>;

  function getVideo(id: string): Video {
    return {
      id,
      title: 'video',
      url: 'http:// ...',
      data: 'byte-data ...',
    };
  }

  function getVideoMetaData(id: string): VideoMetaData {
    return {
      id: id,
      title: 'title',
    };
  }
}
